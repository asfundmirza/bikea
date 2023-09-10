import React from "react";

//Aero:price_1NodRWAdcivc1ys1jTk6jgp4
//Aero  X:price_1NodSsAdcivc1ys14H7I0ajE

const productsArray = [
  {
    id: "price_1NodRWAdcivc1ys1jTk6jgp4",
    title: "Aero",
    price: 300.0,
  },
  {
    id: "price_1NodSsAdcivc1ys14H7I0ajE",
    title: "Aero X",
    price: 400.0,
  },
];

const getProductsData = (id) => {
  const productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("sorry this product is not available");
  }
  return productData;
};

export { productsArray, getProductsData };
