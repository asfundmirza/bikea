import React from "react";
import CycleImage from "../images/Bike.svg";
import batteryImage from "../images/battery icon.svg";
import speedImage from "../images/speed icon.svg";
import weightImage from "../images/weight icon.svg";

const ModalPage = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse mt-5 ">
      <div className="flex items-center justify-center flex-1">
        <h1 className="font-semibold text-3xl">Aero Bike</h1>
      </div>

      <div className="flex flex-1 mt-5 bg-customGreen w-full h-fit  rounded-lg">
        <div className=" flex flex-1 px-4 py-4 items-center justify-center object-fill ">
          <img src={CycleImage} alt="cycle image" />
        </div>
      </div>
      <div className="flex mt-2 justify-evenly">
        <div className="flex flex-col items-center">
          <img
            src={batteryImage}
            alt="battery image"
            width={50}
            height={50}
            className="w-[50px] h-[30px]"
          />
          <p className=" text-sm">60 Km</p>
          <p className="text-gray-400 text-sm">Power Reserve</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={speedImage}
            alt="battery image"
            width={50}
            height={50}
            className="w-[50px] h-[30px]"
          />
          <p className=" text-sm">40 Km/h</p>
          <p className="text-gray-400 text-sm">Speed</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={weightImage}
            alt="battery image"
            width={50}
            height={50}
            className="w-[50px] h-[30px]"
          />
          <p className=" text-sm">140 kg</p>
          <p className="text-gray-400 text-sm">Load</p>
        </div>
      </div>

      {/* <div className="flex flex-col gap-y-6 flex-1 mt-4">
        <p>
          <span className="font-bold">Battery Timing:</span>
          The Aero Bike is equipped with a powerful lithium-ion battery that
          offers an impressive 60 kilometers (37 miles) of riding on a single
          charge.
        </p>
        <p>
          <span className="font-bold">Battery Timing:</span>
          The Aero Bike is equipped with a powerful lithium-ion battery that
          offers an impressive 60 kilometers (37 miles) of riding on a single
          charge.
        </p>
        <p>
          <span className="font-bold">Battery Timing:</span>
          The Aero Bike is equipped with a powerful lithium-ion battery that
          offers an impressive 60 kilometers (37 miles) of riding on a single
          charge.
        </p>
        <p>
          <span className="font-bold">Battery Timing:</span>
          The Aero Bike is equipped with a powerful lithium-ion battery that
          offers an impressive 60 kilometers (37 miles) of riding on a single
          charge.
        </p>
      </div> */}
    </div>
  );
};

export default ModalPage;
