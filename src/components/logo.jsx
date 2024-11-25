import React from "react";
import tof from "../assets/logo-removebg-preview.png";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="logo h-16 w-16">
      <NavLink to="/">
        <img src={tof} alt="logo" />
      </NavLink>
    </div>
  );
}

export default Logo;
