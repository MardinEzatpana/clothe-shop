import React from "react";
import { Link } from "react-router-dom";
import logo  from "../../assets/1400845.svg";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img  src={logo} alt="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/sginIn">
          SGIN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;