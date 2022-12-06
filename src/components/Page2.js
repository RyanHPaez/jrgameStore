import React from "react";
import MotorcycleCard from "./MotorcycleCard";


function Page2(props) {

  //This is our mock data
  const { MotoData } = props;

  //Motorcycles that we add to our mock data will automatically be added.
    //Style each motorcyle in MotorcycleCard.jsx
  const mappedMotorcycles = MotoData.map((motorcycle, i) => {
    return (
      <div key={i}>
        <MotorcycleCard motorcycle={motorcycle} />
      </div>
    )
  })
  return (
    <div className="col-sm-12 text-center">
      <h1 className="font-weight-light">Hello, this is Test</h1>
      {mappedMotorcycles}
    </div>
  );
}
export default Page2;