import React from "react";
import CustomButton from "../common/customButton/CustomButton";
import "./cartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
