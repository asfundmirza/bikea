import React from "react";
import BikeImage from "../images/Bike.svg";
const Cart = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-[calc(100vh-3rem)] m-0 ">
      {/* white section */}

      <div className="flex flex-1 h-full w-auto justify-center md:justify-start px-0 ">
        <div className="flex flex-col flex-1 md:px-7 mt-5 md:mt-[100px] justify-evenly items-center md:items-start md:justify-start">
          <h1 className="font-bold text-3xl md:text-4xl md:mb-5">
            Shopping Cart
          </h1>
          <div className="flex flex-col w-full md:flex-row  gap-1">
            <div className="flex justify-center">
              <img
                src={BikeImage}
                alt="Bike"
                width={300}
                height={300}
                className="md:w-[200px] md:h-[200px]"
              />
            </div>
            <div className="flex  md:mt-0 justify-evenly md:flex-auto gap-5 md:gap-2">
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="font-semibold">Model</p>
                <p>Aero</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="font-semibold">Total</p>
                <p>$300</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="font-semibold">Sub-Total</p>
                <p>$300</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* green section */}
      <div className="flex flex-[0.6] h-full w-auto px-10  bg-customGreen">
        <div className="flex flex-col flex-auto mt-5 mb-2 justify-evenly items-center">
          <h1 className="font-bold text-3xl md:text-4xl">Cart Total</h1>
          <div className="flex justify-between w-full px-5 ">
            <h1 className="font-semibold md:text-xl text-lg">Sub Total</h1>
            <h1 className="md:text-xl text-lg">$300</h1>
          </div>
          <div className="flex justify-between w-full px-5 ">
            <h1 className="font-semibold md:text-xl text-lg">Shipping</h1>
            <h1 className="md:text-xl text-lg">$100</h1>
          </div>
          <div className="flex justify-between w-full px-5 ">
            <h1 className="font-semibold md:text-xl text-lg">Total</h1>
            <h1 className="md:text-xl text-lg">$400</h1>
          </div>
          <div className="flex w-full justify-center  px-5 mt-3">
            <button className="bg-black text-white px-5  text-center text-lg rounded-md  py-2">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
