import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/cart/checkoutItem/CheckoutItem";
import StripeCheckoutButton from "../../components/common/stripeButton/StripeCheckoutButton";
import "./cart.scss";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const itemPrice = cart.reduce((total, product) => {
    return total + product.price * product.qty;
  }, 0);
  const totalPraice = itemPrice;

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cart.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${totalPraice}</div>
      <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
    </div>
    <StripeCheckoutButton price={totalPraice} />
    </div>
  );
};

export default Cart;
