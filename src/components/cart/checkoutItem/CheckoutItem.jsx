import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment, removeFromCart } from '../../../redux/cart/cartAction';

import './checkoutItem.scss';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const {id, name, imageUrl, price, qty } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow'
        onClick={() => cartItem.qty > 1 ? dispatch(decrement(id)): dispatch(removeFromCart(id))}>
          &#10094;
        </div>
        <span className='value'>{qty}</span>
        <div className='arrow' onClick={()=> dispatch(increment(id))}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={()=> dispatch(removeFromCart(id))}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
