import React from 'react'
import { connect, useSelector } from 'react-redux'
import shoppingIcon  from "../../../assets/shopping-bag.svg";
import { toggleCartHidden } from '../../../redux/cart/cartAction';
import './cartIcon.scss';

const CartIcon = ({toggleCartHidden}) => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
    <img className='shopping-icon' src={shoppingIcon} alt='shoppingIcon'/>
    <span className='item-count'>{cart.length}</span>
  </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps )(CartIcon)




