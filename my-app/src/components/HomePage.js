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
