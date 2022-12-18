import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { selectAllMotorcycles, getMotorcyclesStatus, getMotorcyclesError, fetchMotoData } from "../redux/motorcycleSlice";
import Select from "./Select";
import { typeOptionsArray } from "../optionsArray/optionsArray";
import { skillOptionsArray } from "../optionsArray/optionsArray";
import { filterFunction } from "../filterFunction";


function Page2() {

  //useDispatch takes a function defined in our the slice 
  const dispatch = useDispatch();

  //useSelector gets the data from the state from our slice
  const MotoData = useSelector(selectAllMotorcycles);
  const motorcycleStatus = useSelector(getMotorcyclesStatus);
  const motorcycleError = useSelector(getMotorcyclesError);

  const [typeFilterSelected, setTypeFilterSelected] = useState("all");
  const [skillFilterSelected, setSkillFilterSelected] = useState("all");

  useEffect(() => {
    if (motorcycleStatus === "idle") {
      dispatch(fetchMotoData());
    }
  }, [motorcycleStatus, dispatch]);

  //Conditionally rendering the data based on state.status
  let mappedMotorcycles = [];
  if (motorcycleStatus === "loading") {
    mappedMotorcycles = <p>"Loading..."</p>;
  } else if (motorcycleStatus === "succeeded") {
    if (typeFilterSelected !== "all") {
      const filteredMotos = MotoData.filter((moto) => moto.type === typeFilterSelected);
      mappedMotorcycles = filterFunction(filteredMotos, skillFilterSelected);
    } else {
      mappedMotorcycles = filterFunction(MotoData, skillFilterSelected);
    }
  } else if (motorcycleStatus === "failed") {
    mappedMotorcycles = <p>{motorcycleError}</p>
  }

  return (
    <div className="mappedMotorcycles">
      <div className="dropdown">
        <label htmlFor="type">Type</label>
        <Select value={typeFilterSelected} setFilterSelected={setTypeFilterSelected} optionsArray={typeOptionsArray} />
      </div>
      <div className="dropdown">
        <label htmlFor="skill">Skill</label>
        <Select value={skillFilterSelected} setFilterSelected={setSkillFilterSelected} optionsArray={skillOptionsArray} />
      </div>
      {mappedMotorcycles.length > 0 ? mappedMotorcycles : <p>We're Sorry, no bikes matching your search</p>}
    </div>
  );
}
export default Page2;
