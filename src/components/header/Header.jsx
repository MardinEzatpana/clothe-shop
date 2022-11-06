import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import logo  from "../../assets/3259589.svg";
import "./header.scss";
import CartIcon from "../cart/cartIcon/CartIcon";
import CartDropdown from "../cart/cartDropdown/CartDropdown";

const Header = ({hidden}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img  src={logo} alt="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/signIn">
          SIGN IN
        </Link>
        <Link className="option" to="/register">
          REGISTER
        </Link>
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.shoppingCart.hidden
})

export default connect(mapStateToProps) (Header);
