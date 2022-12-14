import React from "react";

import "./cartItem.scss";

const CartItem = ({ item }) => {
  const { imageUrl, price, name, qty } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {qty} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
