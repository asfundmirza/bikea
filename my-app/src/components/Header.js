import React, { useContext, useState, useEffect } from "react";
import bikeaLogo from "../images/bikea-01.svg";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { productsArray } from "../ProductStore";
import { getProductsData } from "../ProductStore";
import { CartContext } from "../CartContext";
import Mobilemenu from "./Mobilemenu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./UserMenu.css";
import { signOut } from "@firebase/auth";
import { auth } from "../Firebase-config";

const Header = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userName, setUserName] = useState("");
  const cart = useContext(CartContext);

  const productQuantity = productsArray.map((product) => {
    const cartItems = cart.getProductQuantity(product.id);
    return cartItems;
  });
  const totalCartItems = productQuantity.reduce(
    (total, quantity) => total + quantity,
    0
  );

  let navigate = useNavigate();
  useEffect(() => {
    let storedUser = localStorage.getItem("E-bike-users");

    storedUser = JSON.parse(storedUser);
    console.log(storedUser);
    if (storedUser) {
      setUserName(storedUser.name);
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = async () => {
    setAnchorEl(null);
  };
  const signoutHandler = async () => {
    setAnchorEl(null);
    localStorage.removeItem("E-bike-users");

    await signOut(auth);

    navigate("/sign-in");
  };

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
    <>
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
            className="hover:cursor-pointer hover:bg-customGreen  rounded-[3px] px-6 py-2 md:py-1 transition-all duration-100"
          >
            Model
          </button>

          <button
            onClick={aboutHandler}
            className="hover:cursor-pointer hover:bg-customGreen  rounded-[3px] px-6 py-2 md:py-1 transition-all duration-100"
          >
            About
          </button>
        </div>

        <div className="flex justify-end space-x-5 items-center">
          <div className="relative">
            <ShoppingCartIcon
              fontSize="medium"
              className="hover:cursor-pointer z-10"
              onClick={cartHandler}
            />
            {totalCartItems > 0 ? (
              <p className="absolute bottom-5 left-1 bg-buttonGreen text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center z-[-1]">
                {totalCartItems}
              </p>
            ) : null}
          </div>
          <div>
            <AccountCircleIcon
              fontSize="large"
              className="hover:cursor-pointer"
              onClick={handleClick}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  // width: "130px",
                  // height: "150px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "10px",

                  border: "1px solid white",
                  borderRadius: "10px",
                },
              }}
            >
              {userName && (
                <MenuItem
                  onClick={handleClose}
                  className="centeredMenuItem"
                  sx={{ fontSize: "20px" }}
                >
                  {userName}
                </MenuItem>
              )}

              <MenuItem
                onClick={signoutHandler}
                className="centeredMenuItem"
                sx={{ fontSize: "20px" }}
              >
                {userName ? "Sign out" : "Sign in"}
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile version */}

      <div className="flex w-full p-3 h-[3rem] md:hidden fixed top-0 left-0 bg-white items-center justify-between px-8 z-50 ">
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

        {/* cart &Menu */}

        <div className="flex  justify-end space-x-5 items-center ">
          <div className="relative">
            <ShoppingCartIcon
              fontSize="medium"
              className="hover:cursor-pointer z-10"
              onClick={cartHandler}
            />
            {totalCartItems > 0 ? (
              <p className="absolute bottom-5 left-1.5 bg-buttonGreen rounded-full h-3 w-3 flex items-center justify-center z-[-1]">
                {""}
              </p>
            ) : null}
          </div>

          <Mobilemenu userName={userName} />
        </div>
      </div>
      {children}
    </>
  );
};

export default Header;
