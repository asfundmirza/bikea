import React from "react";
import Confetti from "../animations/confetti.gif";
import Thanks from "../images/thanks.svg";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div className="w-full h-[100vh] pt-12">
      {/* Button */}

      <div className=" w-full flex justify-end px-4 py-4">
        <Link to={"/home"}>
          <button className="py-2 px-12 rounded-[4px] font-body font-medium bg-buttonGreen hover:bg-customGreen">
            Shop
          </button>
        </Link>
      </div>

      {/* Animation */}
      <div className="flex w-full flex-row items-center justify-center py-[2rem] md:py-[1rem]">
        <img src={Confetti} width={140} alt="Confetti" />
      </div>

      {/* Thanks */}

      <div className="flex w-full justify-center px-6 md:px-0 py-[2rem] md:py-[1rem]">
        <img className="w-4rem" src={Thanks} width={500} alt="Thanks" />
      </div>

      {/* Order confirmation */}
      <div className=" absolute bottom-0 right-0 flex w-full flex-col items-center py-[3rem] md:py-[3rem] px-2 md:px-0 justify-center bg-customGreen space-y-2">
        <h1 className="font-heading text-3xl md:text-5xl text-center tracking-[0.3rem] md:tracking=[0.6rem]">
          Your order is placed
        </h1>
        <h2 className="font-body font-medium text-md text-center md:text-xl ">
          You will be receiving a confirmation email with order details
        </h2>
      </div>
    </div>
  );
};

export default Success;
