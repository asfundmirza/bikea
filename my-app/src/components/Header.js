import React from "react";
import bikeaLogo from "../images/bikea-01.svg";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  let navigate = useNavigate();

  const modelHandler = () => {
    navigate("/model");
  };
  const aboutHandler = () => {
    navigate("/about");
  };
  const bikeaImgHandler = () => {
    navigate("/home");
  };
  const cartHandler = () => {
    navigate("/cart");
  };

  return (
    <div className="flex w-full p-3 h-[3rem] fixed top-0 left-0 z-50  bg-white shadow-md items-center justify-between px-8 ">
      <div className="flex justify-start">
        <img
          src={bikeaLogo}
          alt="bikeaLogo"
          width={100}
          height={100}
          onClick={bikeaImgHandler}
          className="hover:cursor-pointer "
        />
      </div>
      <div className="flex justify-center gap-x-0 md:gap-x-1 flex-grow">
        <button
          onClick={modelHandler}
          className="hover:cursor-pointer hover:bg-customGreen  rounded-lg px-4 py-0 md:py-1 transition-all duration-100"
        >
          Model
        </button>

        <button
          onClick={aboutHandler}
          className="hover:cursor-pointer hover:bg-customGreen  rounded-lg px-4 py-0 md:py-1 transition-all duration-100"
        >
          About
        </button>
      </div>
      <div className="flex justify-end space-x-5 items-center">
        <ShoppingCartIcon
          fontSize="small"
          className="hover:cursor-pointer"
          onClick={cartHandler}
        />
        <p>My Account</p>
      </div>
    </div>
  );
};

export default Header;
