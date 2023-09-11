import React, { useContext } from "react";
import BikeImage from "../images/Bike.svg";
import { productsArray } from "../ProductStore";
import { getProductsData } from "../ProductStore";
import { CartContext } from "../CartContext";
const Cart = () => {
  const cart = useContext(CartContext);

  const productQuantity = productsArray.map((product) => {
    const cartItems = cart.getProductQuantity(product.id);
    return cartItems;
  });

  const checkoutHandler = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  console.log(productQuantity);
  return (
    <div className="flex flex-col md:flex-row w-screen h-[100vh] pt-12 m-0 ">
      {/* white section */}

      <div className="flex flex-1 h-full w-auto justify-center md:justify-start px-0 ">
        <div className="flex flex-col flex-1  md:pl-7 mt-2 md:mt-[100px] justify-evenly items-center md:items-start md:justify-start">
          <h1 className="font-bold text-3xl md:text-4xl md:mb-5">
            Shopping Cart
          </h1>

          {productQuantity.every((qty) => qty === 0) ? (
            <div className="flex flex-row w-full">
              <div className="flex font-semibold md:mt-[150px] text-3xl items-center justify-center">
                Your cart is Empty!
              </div>
            </div>
          ) : (
            productsArray.map((product, index) => {
              return productQuantity[index] > 0 ? (
                <div
                  key={product.id}
                  className="flex  w-full flex-row justify-between px-6 md:px-0 md:justify-center md:gap-1 "
                >
                  <div className=" flex gap-5">
                    <div className="flex justify-center">
                      <img
                        src={BikeImage}
                        alt="Bike"
                        width={70}
                        height={70}
                        className="md:w-[150px] md:h-[150px]"
                      />
                    </div>
                    {/* title and price for mobile */}

                    <div className="md:hidden flex flex-col justify-center items-center gap-0">
                      <p className="md:text-xl text-lg font-semibold">
                        {product.title}
                      </p>
                      <p className="md:text-xl text-lg">
                        ${product.price * productQuantity[index]}
                      </p>
                    </div>
                  </div>

                  <div className="flex  md:mt-0 justify-evenly md:items-center md:flex-auto gap-3 md:gap-1">
                    {/* title and price for web */}

                    <div className="hidden md:block  flex-col justify-center items-center gap-3">
                      <p className=" font-semibold md:text-xl text-lg">Model</p>
                      <p className="md:text-xl text-lg">{product.title}</p>
                    </div>

                    <div className="hidden md:block  flex-col justify-center items-center gap-3">
                      <p className=" font-semibold md:text-xl text-lg">
                        Sub-Total
                      </p>
                      <p className="md:text-xl text-lg">
                        ${product.price * productQuantity[index]}
                      </p>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-3">
                      <button
                        onClick={() => cart.removeOneFromCart(product.id)}
                        className="bg-black w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-600 text-white"
                      >
                        -
                      </button>
                      <p>{productQuantity[index]}</p>
                      <button
                        onClick={() => cart.addOneToCart(product.id)}
                        className="bg-black w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-600 text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ) : null;
            })
          )}
        </div>
      </div>

      {/* green section */}
      <div className="flex flex-[0.6] h-full w-auto px-10  bg-customGreen">
        <div className="flex flex-col flex-auto md:mt-5 md:mb-2 justify-evenly items-center">
          <h1 className="font-bold text-3xl md:text-4xl">Cart Total</h1>
          <div className="flex justify-between w-full px-5 ">
            <h1 className="font-semibold md:text-xl text-lg">Sub Total</h1>
            <h1 className="md:text-xl text-lg">${cart.getTotalCost()}</h1>
          </div>
          <div className="flex justify-between w-full px-5 ">
            <h1 className="font-semibold md:text-xl text-lg">Shipping</h1>
            <h1 className="md:text-xl text-lg">
              {cart.getTotalCost() > 0 ? "$100" : "$0"}
            </h1>
          </div>
          <div className="flex justify-between w-full px-5 ">
            <h1 className="font-semibold md:text-xl text-lg">Total</h1>
            <h1 className="md:text-xl text-lg">
              ${cart.getTotalCost() > 0 ? cart.getTotalCost() + 100 : "0"}
            </h1>
          </div>
          <div className="flex w-full justify-center  px-5">
            <button
              onClick={checkoutHandler}
              className="bg-black text-white px-5  text-center text-lg rounded-md  py-2"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
