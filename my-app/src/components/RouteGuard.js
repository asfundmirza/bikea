import React, { useEffect, useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RouteGuard = ({ children }) => {
  const { bypassSignIn } = useContext(CartContext);
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    let storedUser = localStorage.getItem("E-bike-users");

    if (!storedUser) {
      navigate("/sign-in");
    }
  }, []);
  return <div>{children}</div>;
};

export default RouteGuard;
