import React, { useEffect, useState } from "react";
import MotorcycleCard from "./MotorcycleCard";
import { useSelector, useDispatch } from "react-redux"
import { selectAllMotorcycles, getMotorcyclesStatus, getMotorcyclesError, fetchMotoData } from "../redux/motorcycleSlice";


function Page2() {

  //useDispatch takes a function defined in our the slice 
  const dispatch = useDispatch();

  //useSelector gets the data from the state from our slice
  const MotoData = useSelector(selectAllMotorcycles);
  const motorcycleStatus = useSelector(getMotorcyclesStatus);
  const motorcycleError = useSelector(getMotorcyclesError);

  const [filterSelected, setFilteredSelected] = useState({
    isTrue: false,
    value: "all"
  })

  useEffect(() => {
    if (motorcycleStatus === "idle") {
      dispatch(fetchMotoData());
    }
  }, [motorcycleStatus, dispatch]);

  console.log("filter true?", filterSelected.isTrue)
  console.log("filteredSelected", filterSelected.value);
  //Conditionally rendering the data based on the state.status
  let mappedMotorcycles;
  if (motorcycleStatus === "loading") {
    mappedMotorcycles = <p>"Loading..."</p>;
  } else if (motorcycleStatus === "succeeded") {
    if (filterSelected.isTrue) {
      const filteredMotos = MotoData.filter((moto) => moto.type === filterSelected.value);
      mappedMotorcycles = filteredMotos.map((motorcycle, i) => {
        return (
          <div key={i}>
            <MotorcycleCard motorcycle={motorcycle} />
          </div>
        )
      })
    } else {
      mappedMotorcycles = MotoData.map((motorcycle, i) => {
        return (
          <div key={i}>
            <MotorcycleCard motorcycle={motorcycle} />
          </div>
        )
      })
    }

  } else if (motorcycleStatus === "failed") {
    mappedMotorcycles = <p>{motorcycleError}</p>
  }

console.log("mappedmotors", mappedMotorcycles)
  return (
    <div className="mappedMotorcycles">
      {/* <h1 className="font-weight-light">Hello, this is Test</h1> */}
      <div className="dropdown">
        <select className="dropbtn" value={filterSelected.value} onChange={(e) => setFilteredSelected({ isTrue: true, value: e.target.value })}>
          <option value="all" >All</option>
          <option value="sportbike" >Sportbike</option>
          <option value="sport" >Sport </option>
          <option value="dirt" >Dirt</option>
          <option value="electric" >Electric</option>
          <option value="cruiser" >Cruiser</option>
          <option value="touring" >Touring</option>
          <option value="naked" >Naked</option>
          <option value="dual" >Dual Sport</option>
        </select>
      </div>

      <div className="dropdown">
        <select className="dropbtn">
          <option>Skill Level</option>
          <option>Beginner</option>
          <option>Moderate</option>
          <option>Advanced</option>
        </select>
      </div>
      {mappedMotorcycles}
    </div>
  );
}
export default Page2;
