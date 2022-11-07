import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../../redux/cart/cartAction";
import CustomButton from "../../common/customButton/CustomButton";
import CartItem from "../cartItem/CartItem";
import "./cartDropdown.scss";

const CartDropdown = () => {
  const { cart } = useSelector((state) => state.shoppingCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.length ? (
          cart.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={()=>{navigate("/cart"); dispatch(toggleCartHidden())}} >GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
