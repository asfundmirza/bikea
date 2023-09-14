import React from "react";
import Header from "./components/Header";
import ModalPage from "./components/ModalPage";
import About from "./components/About";
import HomePage from "./components/HomePage";
import CartPage from "./components/Cart";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CartProvider from "./CartContext";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/success" element={<Success />} />
          <Route path="/model" element={<ModalPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />

          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
