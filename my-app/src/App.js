import React from "react";
import Header from "./components/Header";
import ModalPage from "./components/ModalPage";
import About from "./components/About";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/model" element={<ModalPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
