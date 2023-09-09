import React from "react";

const productsArray = [
  {
    id: "1",
    title: "Aero",
    price: 300.0,
  },
  {
    id: "2",
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
