import React, { useContext, useState } from "react";
import CycleImage from "../images/Bike.svg";
import batteryImage from "../images/battery icon.svg";
import speedImage from "../images/speed icon.svg";
import weightImage from "../images/weight icon.svg";
import { productsArray } from "../ProductStore";
import { getProductsData } from "../ProductStore";
import { CartContext } from "../CartContext";

const ModalPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const cart = useContext(CartContext);

  const addToCartHandler = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div className="pt-12">
      {productsArray.map((product) =>
        product.id === "price_1NodRWAdcivc1ys1jTk6jgp4" ? (
          <div key={product.id} className="flex flex-col md:flex-row  ">
            {showMessage && (
              <div className="bg-black text-white shadow-md fixed top-[30%] left-1/2 rounded-lg px-4 transform -translate-x-1/2 -translate-y-1/2 p-2 z-50">
                Added to Cart
              </div>
            )}
            {/* Aero bike image */}

            <div className="flex flex-1 md:flex-[0.6]  mb-4 md:mb-0 md:mt-0 bg-customGreen w-full   h-fit md:h-auto   ">
              <div className="flex flex-1 px-4 py-4 items-center justify-center object-fill">
                <img src={CycleImage} alt="cycle image" className="w-full" />
              </div>
            </div>
            {/* Aero Bike */}

            <div className="flex items-center flex-col  justify-center md:justify-start mt-5 md:mt-[100px] flex-1 md:flex-[0.9]">
              <h1 className="font-semibold text-3xl md:text-5xl ">
                {product.title}
              </h1>

              <div className="flex flex-col md:flex-row mt-1 md:mt-14  px-1">
                {/* Aero bike description */}

                <div className="flex flex-col mt-8 px-5 gap-3">
                  <div className="flex flex-col ">
                    <p className="leading-tight">
                      <span className="font-bold">Battery Timing:</span>
                      The Aero Bike is equipped with a powerful lithium-ion
                      battery that offers an impressive 60 kilometers (37 miles)
                      of riding on a single charge.
                    </p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="leading-tight">
                      <span className="font-bold">Speed:</span>
                      With a top speed of 40 kilometers per hour (25 miles per
                      hour), the Aero Bike allows you to zip through urban
                      streets and bike paths with ease
                    </p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="leading-tight">
                      <span className="font-bold">Load Capacity:</span>
                      The Aero Bike boasts a robust frame and components,
                      enabling it to carry a maximum load of up to 140 kilograms
                      (309 pounds).
                    </p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="leading-tight">
                      <span className="font-bold">Breaking System:</span>
                      Safety is a top priority with the Aero Bike. It comes
                      equipped with a reliable and responsive braking system.
                    </p>
                  </div>

                  {/* cart button for web */}

                  <div className="hidden md:block  flex-col mt-5 gap-3">
                    <p className="font-bold">
                      Price:
                      <span className="font-mono font-light">
                        ${product.price}.00
                      </span>
                    </p>
                    <button
                      onClick={() => {
                        cart.addOneToCart(product.id);
                        addToCartHandler();
                      }}
                      className="bg-buttonGreen border p-1 px-6 rounded-[4px] text-center w-fit"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Aero bike icons  */}

                <div className="flex md:flex-col mt-10 md:mt-0 justify-evenly items-center px-2 md:px-0 md:gap-20 ">
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
                      className="w-[100px] h-[30px]"
                    />
                    <p className=" text-sm text-center">140 kg</p>
                    <p className="text-gray-400 text-sm">Load</p>
                  </div>
                </div>

                {/* Aero cart for mobile */}

                <div className="flex md:hidden justify-between mt-10 px-5">
                  <p className="font-bold">
                    Price:
                    <span className="font-mono font-light">
                      ${product.price}.00
                    </span>
                  </p>

                  <button
                    onClick={() => {
                      cart.addOneToCart(product.id);
                      addToCartHandler();
                    }}
                    className="bg-buttonGreen border  p-1 px-3 rounded-[4px] text-center w-fit"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            key={product.id}
            className="flex flex-col-reverse md:flex-row mt-10 mb-10"
          >
            {/* Aero Bike X  */}

            <div className="flex items-center flex-col  justify-center md:justify-start mt-5 md:mt-[100px] flex-1 md:flex-[0.9]">
              <h1 className="font-semibold text-3xl md:text-5xl ">
                {product.title}
              </h1>

              <div className="flex flex-col md:flex-row mt-1 md:mt-14  px-1">
                <div className="flex flex-col mt-5 px-5 gap-3">
                  <div className="flex flex-col ">
                    <p className="leading-tight">
                      <span className="font-bold">Battery Timing:</span>
                      The Aero Bike is equipped with a powerful lithium-ion
                      battery that offers an impressive 80 kilometers (37 miles)
                      of riding on a single charge.
                    </p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="leading-tight">
                      <span className="font-bold">Speed:</span>
                      With a top speed of 50 kilometers per hour (25 miles per
                      hour), the Aero Bike allows you to zip through urban
                      streets and bike paths with ease
                    </p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="leading-tight">
                      <span className="font-bold">Load Capacity:</span>
                      The Aero Bike boasts a robust frame and components,
                      enabling it to carry a maximum load of up to 150 kilograms
                      (309 pounds).
                    </p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="leading-tight">
                      <span className="font-bold">Breaking System:</span>
                      Safety is a top priority with the Aero Bike X. It comes
                      equipped with a reliable and responsive braking system.
                    </p>
                  </div>

                  {/* Aero bike X icons for web */}

                  <div className="hidden md:block flex-col mt-5 gap-3">
                    <p className="font-bold">
                      Price:
                      <span className="font-mono font-light">
                        ${product.price}.00
                      </span>
                    </p>
                    <button
                      onClick={() => {
                        cart.addOneToCart(product.id);
                        addToCartHandler();
                      }}
                      className="bg-buttonGreen  border p-1 px-6 rounded-[4px] text-center w-fit"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Aero bike X icons */}

                <div className="flex md:flex-col mt-10 md:mt-0 justify-evenly items-center px-2 md:px-0 md:gap-20  ">
                  <div className="flex flex-col items-center ">
                    <img
                      src={batteryImage}
                      alt="battery "
                      width={50}
                      height={50}
                      className="w-[100px] h-[30px]"
                    />
                    <p className=" text-sm text-center">80 Km</p>
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
                    <p className=" text-sm text-center">50 Km/h</p>
                    <p className="text-gray-400 text-sm">Speed</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={weightImage}
                      alt="battery "
                      width={50}
                      height={50}
                      className="w-[100px] h-[30px]"
                    />
                    <p className=" text-sm text-center">150 kg</p>
                    <p className="text-gray-400 text-sm">Load</p>
                  </div>
                </div>
                {/* Aero x cart for mobile */}

                <div className="flex md:hidden justify-between mt-10 px-5">
                  <p className="font-bold">
                    Price:
                    <span className="font-mono font-light">
                      ${product.price}.00
                    </span>
                  </p>

                  <button
                    onClick={() => {
                      cart.addOneToCart(product.id);
                      addToCartHandler();
                    }}
                    className="bg-buttonGreen border p-1 px-3 rounded-[4px] text-center w-fit"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-[0.6] mt-5 mb-4 md:mb-0 md:mt-0 bg-customGreen w-full   h-fit md:h-auto relative  ">
              <div className="flex flex-1 px-4 py-4 items-center justify-center object-fill">
                <img src={CycleImage} alt="cycle image" className="w-full" />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ModalPage;
