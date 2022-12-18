import React, { useEffect} from "react";
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

  useEffect(() => {
    if (motorcycleStatus === "idle") {
      dispatch(fetchMotoData());
    }
  }, [motorcycleStatus, dispatch]);

  
  //Conditionally rendering the data based on the state.status
  let mappedMotorcycles;
  if (motorcycleStatus === "loading") {
    mappedMotorcycles = <p>"Loading..."</p>;
  } else if (motorcycleStatus === "succeeded") {
    mappedMotorcycles = MotoData.map((motorcycle, i) => {
      return (
        <div key={i}>
          <MotorcycleCard motorcycle={motorcycle} />
        </div>
      )
    })
  }else if(motorcycleStatus === "failed"){
    mappedMotorcycles = <p>{motorcycleError}</p>
  }


  return (
    <div className="mappedMotorcycles">
      {/* <h1 className="font-weight-light">Hello, this is Test</h1> */}
      {mappedMotorcycles}
    </div>
  );
}
export default Page2;
