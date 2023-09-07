import React from "react";
import bikeImage from "../images/Bike.svg";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const HomePage = () => {
  return (
    <div className="flex m-0 w-full h-[calc(100vh-3rem)] relative ">
      <div className="flex flex-1 bg-customGreen w-1/2 h-full items-center justify-center"></div>
      <div className="flex flex-1 bg-white w-1/2 h-full items-center justify-center"></div>
      <div
        className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        style={{ fontSize: "15vw" }}
      >
        <h1 className="font-bold tracking-wide text-buttonGreen relative">
          POWER
          <img
            src={bikeImage}
            alt="Bike"
            width={700}
            height={700}
            className="absolute top-[79%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </h1>
      </div>
      <div
        className="flex absolute bg-customGreen p-5 "
        style={{ bottom: 0, right: 0 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-12 gap-6  px-4 py-4">
          <div className="flex flex-col gap-1 justify-center items-center">
            <p>Aero Bike</p>
            <p className="font-semibold">$300.00</p>
          </div>
          <div className="flex gap-1 items-center">
            <ArrowCircleLeftIcon />
            <ArrowCircleRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
