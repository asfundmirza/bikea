import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
  let navigate = useNavigate();

  useEffect(() => {
    let storedUser = localStorage.getItem("E-bike-users");

    if (!storedUser) {
      navigate("/sign-in");
    }
  }, []);
  return <div>{children}</div>;
};

export default RouteGuard;
