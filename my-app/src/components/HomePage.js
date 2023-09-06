import React from "react";
import bikeImage from "../images/Bike.svg";
const HomePage = () => {
  return (
    <div className="flex m-0 w-full h-[calc(100vh-3rem)] relative overflow-hidden">
      <div className="flex flex-1 bg-customGreen w-1/2 h-full items-center justify-center"></div>
      <div className="flex flex-1 bg-white w-1/2 h-full items-center justify-center"></div>
      <h1
        className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-bold tracking-wide text-buttonGreen"
        style={{ fontSize: "15vw" }}
      >
        POWER
      </h1>
      <div className="absolute top-[56%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={bikeImage} alt="Bike" width={700} height={700} />
      </div>
    </div>
  );
};

export default HomePage;
