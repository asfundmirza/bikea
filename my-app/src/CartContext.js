import { createContext, useState } from "react";

import { productsArray, getProductsData } from "./ProductStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [bypassSignIn, setBypassSignIn] = useState(false);

  function getProductQuantity(id) {
    const quantity = cartItems.find((product) => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartItems([
        ...cartItems,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartItems(
        cartItems.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartItems((cartItems) =>
      cartItems.filter((product) => {
        return product.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartItems.map((cartProduct) => {
      const productData = getProductsData(cartProduct.id);
      totalCost += productData.price * cartProduct.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartItems,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    bypassSignIn,
    setBypassSignIn,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
export default CartProvider;
