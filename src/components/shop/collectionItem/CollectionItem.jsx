import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartAction";
import CustomButton from "../../common/customButton/CustomButton";

import "./collectionItem.scss";

const CollectionItem = ({ item }) => {
  const {name, price, imageUrl} = item;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => handleAddToCart(item)} inverted >
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
