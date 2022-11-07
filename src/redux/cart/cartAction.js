export const toggleCartHidden= () => {
  return {
    type: 'TOGGLE_CART_HIDDEN',
  };
};

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const increment = (productId) => {
  return {
    type: "INCREMENT",
    payload: productId,
  };
};

export const decrement = (productId) => {
  return {
    type: "DECREMENT",
    payload: productId,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};
