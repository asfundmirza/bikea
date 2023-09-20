import React, { useState } from "react";

import bikeImage from "../images/Bike.svg";

import Header from "./Header";
import batteryIcon from "../images/battery icon.svg";
import speedIcon from "../images/speed icon.svg";
import weightIcon from "../images/weight icon.svg";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? "100vw" : "-100vw",
      opacity: 0,
      transition: { duration: 0.5 },
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? "-100vw" : "100vw",
      opacity: 0,
      transition: { duration: 0.5 },
    };
  },
};

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const products = [
    {
      bigHeading: "POWER",
      modelName: "Aero",
      modelPrice: "$300.00",
      modelImage: bikeImage,
      batteryDetails: "60 Km",
      batteryMoredetails: "Power Reserve",
      speedDetails: "40 Km/h",
      speedMoredetails: "Speed",
      weightDetails: "140 Kg",
      weightMoredetails: "Load",
      batteryIcon: batteryIcon,
      speedIcon: speedIcon,
      weightIcon: weightIcon,
    },
    {
      bigHeading: "SPEED",
      modelName: "Aero X",
      modelPrice: "$400.00",
      modelImage: bikeImage,
      batteryDetails: "80 Km",
      batteryMoredetails: "Power Reserve",
      speedDetails: "50 Km/h",
      speedMoredetails: "Speed",
      weightDetails: "150 Kg",
      weightMoredetails: "Load",
      batteryIcon: batteryIcon,
      speedIcon: speedIcon,
      weightIcon: weightIcon,
    },
  ];

  const handleClick = (d) => {
    setCurrentIndex((prevIndex) => {
      if (d === "right") {
        setDirection(1);
        return (prevIndex + 1) % products.length;
      } else {
        setDirection(-1);
        return (prevIndex - 1 + products.length) % products.length;
      }
    });
  };

  const product = products[currentIndex];

  return (
    <Header isVisible={true}>
      <div className="overflow-hidden">
        <div className="hidden md:flex  m-0 w-full h-[100vh] relative ">
          <div className="flex flex-1  md:bg-customGreen w-1/2 h-full items-center justify-center"></div>
          <div className="flex flex-1 bg-white w-1/2 h-full items-center justify-center"></div>
          <div
            className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2   "
            style={{ fontSize: "17vw" }}
          >
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              key={currentIndex}
              custom={direction}
              className=" font-medium tracking-[2.7rem] font-heading  text-buttonGreen relative"
            >
              {product.bigHeading}
              <img
                src={product.modelImage}
                alt="Bike"
                width={610}
                height={700}
                className="absolute top-[59%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </motion.div>
          </div>

          <div
            className="flex absolute flex-col w-full md:w-[30%] bg-customGreen p-5 "
            style={{ bottom: 0, right: 0 }}
          >
            <div className="flex  md:flex-row items-center justify-center md:gap-12 gap-6  px-4 py-4">
              <div className="flex flex-col gap-1 justify-center items-center">
                <p className="font-bold font-body text-lg " >{product.modelName}</p>
                <p className="font-semibold font-body ">{product.modelPrice}</p>
              </div>
              <div className="flex gap-1 items-center">
                <ArrowCircleLeftIcon
                  className="hover:cursor-pointer"
                  onClick={() => handleClick("left")}
                />
                <ArrowCircleRightIcon
                  className="hover:cursor-pointer"
                  onClick={() => handleClick("right")}
                />
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
              <motion.img
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                key={currentIndex}
                custom={direction}
                src={product.modelImage}
                alt="Bike"
                width={600}
                height={600}
              />
            </div>
            <div className="modelbigHeading flex justify-center">
              <h1 className="flex font-medium font-heading tracking-[2rem]  text-buttonGreen  ">
                {product.bigHeading}
              </h1>
            </div>
          </div>

          {/* icons */}

          <div className="flex flex-col h-full">
            {" "}
            {/* New wrapper div with flex column */}
            <div className="flex flex-col flex-grow justify-evenly">
              <div className="main flex flex-col  items-center">
                <div>
                  <img
                    src={product.batteryIcon}
                    alt="battery icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="iconheading flex flex-col  items-center">
                  <h2>{product.batteryDetails}</h2>
                  {/* <h2>{product.iconMoreDetails}</h2> */}
                </div>
              </div>
              <div className="main flex flex-col  items-center">
                <div>
                  <img
                    src={product.speedIcon}
                    alt="speed icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="iconheading flex flex-col  items-center">
                  <h2>{product.speedDetails}</h2>
                  {/* <h2>{product.iconMoreDetails}</h2> */}
                </div>
              </div>
              <div className="main flex flex-col  items-center">
                <div>
                  <img
                    src={product.weightIcon}
                    alt="weight icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="iconheading flex flex-col  items-center">
                  <h2>{product.weightDetails}</h2>
                  {/* <h2>{product.iconMoreDetails}</h2> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-[12vh] bg-customGreen p-5">
              <div className="flex items-center justify-center gap-6">
                <div className="flex flex-col gap-1 justify-center items-center">
                  <p className="font-bold font-body text-lg">{product.modelName}</p>
                  <p className="font-semibold">{product.modelPrice}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <ArrowCircleLeftIcon onClick={() => handleClick("left")} />
                  <ArrowCircleRightIcon onClick={() => handleClick("right")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HomePage;
