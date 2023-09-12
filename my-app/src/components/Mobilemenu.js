import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Backdrop from "@mui/material/Backdrop";
import "./UserMenu.css";

const Mobilemenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  let navigate = useNavigate();
  const modelHandler = () => {
    navigate("/model");
  };
  const aboutHandler = () => {
    navigate("/about");
  };

  return (
    <div>
      <MenuIcon
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
            width: "200px",
            // height: "200px",
            paddingTop: "15px",
            paddingBottom: "15px",
            border: "1px solid white",
            borderRadius: "10px",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
          }}
          className="centeredMenuItem"
          sx={{ fontSize: "20px" }}
        >
          Name
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            modelHandler();
          }}
          className="centeredMenuItem"
          sx={{ fontSize: "20px" }}
        >
          Modal
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
            aboutHandler();
          }}
          className="centeredMenuItem"
          sx={{ fontSize: "20px" }}
        >
          About
        </MenuItem>
      </Menu>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      ></Backdrop>
    </div>
  );
};

export default Mobilemenu;
