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
