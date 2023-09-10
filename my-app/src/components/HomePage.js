import React from "react";

import bikeImage from "../images/Bike.svg";
import Herocard from "./Herocard";
import { getProductsData } from "../ProductStore";
const HomePage = () => {
  return (
    <div>
      <Herocard
        bigHeading="POWER"
        modelName="Aero"
        modelPrice="$300"
        modelImage={bikeImage}
      />
    </div>
  );
};

export default HomePage;
//sk_test_51NodJrAdcivc1ys1DF5snuMJKFeGJIjx7qaymbknOI4QRS9Y6lpm0bKPXonOQR3p1bjkSFcWiPr52ZEs2XchF7ut002PORE8kR
