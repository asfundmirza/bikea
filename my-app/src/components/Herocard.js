import React from "react";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Iconcard from "./Iconcard";
import batteryIcon from "../images/battery icon.svg";
import speedIcon from "../images/speed icon.svg";
import weightIcon from "../images/weight icon.svg";

const Herocard = (props) => {
  return (
    <>
      {/* Dekstop view */}

      <div className="hidden md:flex  m-0 w-full h-[100vh] relative ">
        <div className="flex flex-1  md:bg-customGreen w-1/2 h-full items-center justify-center"></div>
        <div className="flex flex-1 bg-white w-1/2 h-full items-center justify-center"></div>
        <div
          className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  "
          style={{ fontSize: "15vw" }}
        >
          <h1 className="font-bold tracking-wide text-buttonGreen relative">
            {props.bigHeading}
            <img
              src={props.modelImage}
              alt="Bike"
              width={700}
              height={700}
              className="absolute top-[79%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </h1>
        </div>

        <div
          className="flex absolute flex-col w-full md:w-[30%] bg-customGreen p-5 "
          style={{ bottom: 0, right: 0 }}
        >
          <div className="flex  md:flex-row items-center justify-center md:gap-12 gap-6  px-4 py-4">
            <div className="flex flex-col gap-1 justify-center items-center">
              <p>{props.modelName}</p>
              <p className="font-semibold">{props.modelPrice}</p>
            </div>
            <div className="flex gap-1 items-center">
              <ArrowCircleLeftIcon />
              <ArrowCircleRightIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}

      <div className="flex  md:hidden flex-col w-full h-[100vh]  pt-12  ">
        <div
          className=" flex justify-center flex-col"
          style={{ fontSize: "clamp(60px, 14vw, 15vw)" }}
        >
          <div className="model flex justify-center bg-customGreen h-[40vh]  ">
            <img src={props.modelImage} alt="Bike" width={600} height={600} />
          </div>
          <div className="modelbigHeading flex justify-center">
            <h1 className="flex font-bold tracking-wide  text-buttonGreen  ">
              {props.bigHeading}
            </h1>
          </div>
        </div>

        {/* icons */}

        <div className="flex flex-col h-full">
          {" "}
          {/* New wrapper div with flex column */}
          <div className="flex flex-col flex-grow justify-evenly">
            <Iconcard
              iconImage={batteryIcon}
              iconDetails={props.batteryDetails}
              // iconMoreDetails={props.batteryMoredetails}
            />
            <Iconcard
              iconImage={speedIcon}
              iconDetails={props.speedDetails}
              // iconMoreDetails={props.batteryMoredetails}
            />
            <Iconcard
              iconImage={weightIcon}
              iconDetails={props.weightDetails}
              // iconMoreDetails={props.weightMoredetails}
            />
          </div>
          <div className="flex flex-col w-full h-[12vh] bg-customGreen p-5">
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col gap-1 justify-center items-center">
                <p>{props.modelName}</p>
                <p className="font-semibold">{props.modelPrice}</p>
              </div>
              <div className="flex gap-1 items-center">
                <ArrowCircleLeftIcon />
                <ArrowCircleRightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herocard;
