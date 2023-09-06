import React from "react";
import CycleImage from "../images/Bike.svg";
import batteryImage from "../images/battery icon.svg";
import speedImage from "../images/speed icon.svg";
import weightImage from "../images/weight icon.svg";

const ModalPage = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse  mt-5 md:mt-0 ">
      {/* Aero Bike */}

      <div className="flex items-center md:flex-col  justify-center md:justify-start mt-5 md:mt-[100px] flex-1 md:flex-[0.9]">
        <h1 className="font-semibold text-3xl md:text-5xl ">Aero Bike</h1>
        <div className="hidden md:block ">
          <div className="flex mt-14  px-10">
            <div className="flex flex-col mt-8 px-8 gap-3">
              <div className="flex flex-col ">
                <p className="leading-tight">
                  <span className="font-bold">Battery Timing:</span>
                  The Aero Bike is equipped with a powerful lithium-ion battery
                  that offers an impressive 60 kilometers (37 miles) of riding
                  on a single charge.
                </p>
              </div>
              <div className="flex flex-col ">
                <p className="leading-tight">
                  <span className="font-bold">Speed:</span>
                  The Aero Bike is equipped with a powerful lithium-ion battery
                  that offers an impressive 60 kilometers (37 miles) of riding
                  on a single charge.
                </p>
              </div>
              <div className="flex flex-col ">
                <p className="leading-tight">
                  <span className="font-bold">Load Capacity:</span>
                  The Aero Bike is equipped with a powerful lithium-ion battery
                  that offers an impressive 60 kilometers (37 miles) of riding
                  on a single charge.
                </p>
              </div>
              <div className="flex flex-col ">
                <p className="leading-tight">
                  <span className="font-bold">Breaking System:</span>
                  The Aero Bike is equipped with a powerful lithium-ion battery
                  that offers an impressive 60 kilometers (37 miles) of riding
                  on a single charge.
                </p>
              </div>
              <div className="flex flex-col mt-5 gap-3">
                <p className="font-bold">
                  Price:
                  <span className="font-mono font-light">$300.00</span>
                </p>
                <button className="bg-buttonGreen border p-1 px-3 rounded-xl text-center w-fit">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* images */}
            <div className="flex flex-col justify-evenly gap-20 ">
              <div className="flex flex-col items-center ">
                <img
                  src={batteryImage}
                  alt="battery "
                  width={50}
                  height={50}
                  className="w-[100px] h-[30px]"
                />
                <p className=" text-sm text-center">60 Km</p>
                <p className="text-gray-400 text-sm">Power</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={speedImage}
                  alt="battery"
                  width={50}
                  height={50}
                  className="w-[100px] h-[30px]"
                />
                <p className=" text-sm text-center">40 Km/h</p>
                <p className="text-gray-400 text-sm">Speed</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={weightImage}
                  alt="battery "
                  width={50}
                  height={50}
                  className="w-[120px] h-[45px]"
                />
                <p className=" text-sm text-center">140 kg</p>
                <p className="text-gray-400 text-sm">Load</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 md:flex-[0.6] mt-5 mb-4 md:mb-0 md:mt-0 bg-customGreen w-full   h-fit md:h-auto relative  ">
        <div className="flex flex-1 px-4 py-4 items-center justify-center object-fill">
          <img src={CycleImage} alt="cycle image" className="w-full" />
        </div>
        <button
          style={{ bottom: "0px", right: "0px" }}
          className="md:hidden  absolute bg-buttonGreen text-white rounded-l-xl text-sm py-1 px-2"
        >
          Add to Cart
        </button>
      </div>
      <div className=" md:hidden flex mt-2 justify-evenly">
        <div className="flex flex-col items-center">
          <img
            src={batteryImage}
            alt="battery "
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
            alt="battery"
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
            alt="battery "
            width={50}
            height={50}
            className="w-[50px] h-[30px]"
          />
          <p className=" text-sm">140 kg</p>
          <p className="text-gray-400 text-sm">Load</p>
        </div>
      </div>

      <div className="md:hidden flex  flex-1 flex-col gap-4 mt-9 mb-3 px-8">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-center  ">
            <p className="font-bold bg-customGreen border rounded-3xl border-customGreen  text-center w-40 h-9 flex items-center justify-center">
              Battery Timing
            </p>
          </div>

          <p>
            The Aero Bike is equipped with a powerful lithium-ion battery that
            offers an impressive 60 kilometers (37 miles) of riding on a single
            charge.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-center  ">
            <p className="font-bold bg-customGreen border rounded-3xl border-customGreen  text-center w-40 h-9 flex items-center justify-center">
              Speed
            </p>
          </div>

          <p>
            With a top speed of 40 kilometers per hour (25 miles per hour), the
            Aero Bike allows you to zip through urban streets and bike paths
            with ease
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-center  ">
            <p className="font-bold bg-customGreen border rounded-3xl border-customGreen  text-center w-40 h-9 flex items-center justify-center">
              Load Capacity
            </p>
          </div>

          <p>
            The Aero Bike boasts a robust frame and components, enabling it to
            carry a maximum load of up to 140 kilograms (309 pounds).
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-center  ">
            <p className="font-bold bg-customGreen border rounded-3xl border-customGreen  text-center w-40 h-9 flex items-center justify-center">
              Breaking Sytem
            </p>
          </div>

          <p>
            Safety is a top priority with the Aero Bike. It comes equipped with
            a reliable and responsive braking system.
          </p>
        </div>
      </div>

      {/* Aero Bike X for mobile*/}

      {/* <div className="flex items-center justify-center mt-14 flex-1">
        <h1 className="font-semibold text-3xl">Aero Bike X</h1>
      </div>

      <div className="flex flex-1 mt-5 bg-customGreen w-full h-fit relative  ">
        <div className="flex flex-1 px-4 py-4 items-center justify-center object-fill">
          <img src={CycleImage} alt="cycle image" className="w-full" />
        </div>
        <button
          style={{ bottom: "0px", right: "0px" }}
          className="absolute bg-buttonGreen text-white rounded-l-xl text-sm py-1 px-2"
        >
          Add to Cart
        </button>
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
          <p className=" text-sm">80 Km</p>
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
          <p className=" text-sm">50 Km/h</p>
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
          <p className=" text-sm">150 kg</p>
          <p className="text-gray-400 text-sm">Load</p>
        </div>
      </div>

      <div className="flex  flex-1 flex-col gap-4 mt-9 mb-3 px-8">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-center  ">
            <p className="font-bold bg-customGreen border rounded-3xl border-customGreen  text-center w-40 h-9 flex items-center justify-center">
              Battery Timing
            </p>
          </div>

          <p>
            The Aero Bike is equipped with a powerful lithium-ion battery that
            offers an impressive 80 kilometers (37 miles) of riding on a single
            charge.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-center  ">
            <p className="font-bold bg-customGreen border rounded-3xl border-customGreen  text-center w-40 h-9 flex items-center justify-center">
              Speed
            </p>
          </div>

          <p>
            With a top speed of 50 kilometers per hour (25 miles per hour), the
            Aero Bike allows you to zip through urban streets and bike paths
            with ease
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-center  ">
            <p className="font-bold bg-customGreen border rounded-3xl border-customGreen  text-center w-40 h-9 flex items-center justify-center">
              Load Capacity
            </p>
          </div>

          <p>
            The Aero Bike boasts a robust frame and components, enabling it to
            carry a maximum load of up to 150 kilograms (309 pounds).
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-center  ">
            <p className="font-bold bg-customGreen border rounded-3xl border-customGreen  text-center w-40 h-9 flex items-center justify-center">
              Breaking Sytem
            </p>
          </div>

          <p>
            Safety is a top priority with the Aero Bike. It comes equipped with
            a reliable and responsive braking system.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default ModalPage;
