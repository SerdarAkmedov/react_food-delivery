import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import WorksIcon from "@mui/icons-material/Work";

const Navbar = () => {
  const [menu, setMenuOpen] = useState(false);
  const menuOptions = [
    { text: "home", icon: <HomeIcon /> },
    { text: "about", icon: <InfoIcon /> },
    { text: "testimonials", icon: <CommentRoundedIcon /> },
    { text: "contact", icon: <PhoneRoundedIcon /> },
    { text: "cart", icon: <ShoppingCartRoundedIcon /> },
    { text: "work", icon: <WorksIcon /> },
  ];
  return (
    <nav>
      <div className="nav-logo-container" id="navbar">
        {/* <img src={Logo} alt="logo" style={{background:"black"}}/> */}
        <span id="logo">FOODIE</span>
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#works">Works</a>
        <a href="#testimonials">Testimoials</a>
        <a href="#contact">Contact</a>
        <a>
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button
          style={{ width: "10rem", height: "3rem", fontSize: "1rem" }}
          className="primary-button"
        >
          Booking Now
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setMenuOpen(true)} />
      </div>
      <Drawer open={menu} onClose={() => setMenuOpen(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setMenuOpen(false)}
          onKeyDown={() => setMenuOpen(false)}
        >
          <List>
            {menuOptions.map((item) => {
              return (
                <>
                  <a
                    href={`#${item.text}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ListItem key={item.text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  </a>
                </>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
