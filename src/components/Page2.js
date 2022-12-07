import React from "react";
import MotorcycleCard from "./MotorcycleCard";

<div className="col-sm-12 text-center"></div>;
function Page2(props) {
  //This is our mock data
  const { MotoData } = props;

  //Motorcycles that we add to our mock data will automatically be added.
  //Style each motorcyle in MotorcycleCard.jsx
  const mappedMotorcycles = MotoData.map((motorcycle, i) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mt-5">
            <div key={i}>
              <MotorcycleCard motorcycle={motorcycle} />
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="mappedMotorcycles">
      {/* <h1 className="font-weight-light">Hello, this is Test</h1> */}
      {mappedMotorcycles}
    </div>
  );
}
export default Page2;
