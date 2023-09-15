import React from "react";
import Sad from "../animations/sad.gif";
import Canceled from "../images/canceled.svg";
import { Link } from "react-router-dom";
import Header from "./Header";
const Cancel = () => {
  return (
    <Header isVisible={false}>
      <div className="w-full h-[100vh] pt-12">
        {/* Button */}

        <div className=" w-full flex justify-end px-4 py-4">
          <Link to={"/cart"}>
            <button className="py-2 px-12 rounded-[4px] font-body font-medium bg-buttonGreen hover:bg-customGreen">
              Cart
            </button>
          </Link>
        </div>

        {/* Animation */}
        <div className="flex w-full flex-row items-center justify-center py-[2rem] md:py-[1rem]">
          <img src={Sad} width={140} alt="Confetti" />
        </div>

        {/* Thanks */}

        <div className="flex w-full justify-center text-xl px-6 md:px-0 py-[2rem] md:py-[1rem]">
          <img src={Canceled} width={500} alt="Canceled" />
        </div>

        {/* Order confirmation */}
        <div className=" absolute bottom-0 right-0 flex w-full flex-col items-center justify-center py-[3rem]  px-2  bg-customGreen space-y-2 ">
          <h1 className="font-heading text-3xl md:text-5xl text-center tracking-[0.3rem] md:tracking=[0.6rem]">
            Payment<span>{"  "} </span> Un-successfull
          </h1>
          {/* <div className=" w-full flex justify-center  ">
          <Link to={"/model"}>
            <button className="py-2 px-12 rounded-[4px] font-body font-medium bg-buttonGreen hover:bg-customGreen">
              Shop More
            </button>
          </Link>
        </div> */}
        </div>
      </div>
    </Header>
  );
};

export default Cancel;
