import React from "react";
import Header from "./components/Header";
import ModalPage from "./components/ModalPage";
import About from "./components/About";
import HomePage from "./components/HomePage";
import CartPage from "./components/Cart";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CartProvider from "./CartContext";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/model" element={<ModalPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
          {/* <Route path="/productStore" element={<ProductStore />} /> */}

          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
