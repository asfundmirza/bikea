import React from "react";

import bikeImage from "../images/Bike.svg";
import Herocard from "./Herocard";
import { getProductsData } from "../ProductStore";
const HomePage = () => {
  return (
    <div>
      <Herocard
        bigHeading="POWER"
        modelName={getProductsData("1").title}
        modelPrice={`$${getProductsData("1").price}.00`}
        modelImage={bikeImage}
      />
    </div>
  );
};

export default HomePage;
