import React from "react";

import bikeImage from "../images/Bike.svg";
import Herocard from "./Herocard";
import { getProductsData } from "../ProductStore";
const HomePage = () => {
  return (
    <div>
    {/* Aero Bike Homepage Card */}

    <Herocard bigHeading="POWER" modelName="Aero" modelPrice="$300.00" modelImage={bikeImage} 
    batteryDetails="60 Km" batteryMoredetails="Power Reserve"
    speedDetails="40 Km/h" speedMoredetails="Speed"
    weightDetails="140 Kg" weightMoredetails="Load"
    
    />

    {/* Aero Bike X Homepage Card */}

    {/* <Herocard bigHeading="SPEED" modelName="Aero X" modelPrice="$450.00" modelImage={bikeImage} 
   
    batteryDetails="80 Km" batteryMoredetails="Power Reserve"
    speedDetails="50 Km/h" speedMoredetails="Speed"
    weightDetails="150 Kg" weightMoredetails="Load"/> */}

  </div>
  );
};

export default HomePage;
