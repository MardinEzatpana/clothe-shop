import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../../common/customButton/CustomButton";
import CartItem from "../cartItem/CartItem";
import "./cartDropdown.scss";

const CartDropdown = () => {
  const { cart } = useSelector((state) => state.shoppingCart);
  return (
    <div className="cart-dropdown">
      <div className="cart-items" >
        {
          cart.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
