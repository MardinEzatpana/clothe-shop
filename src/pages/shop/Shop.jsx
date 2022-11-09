import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../../components/shop/collectionPreview/CollectionPreview";

import "./shop.scss";

const Shop = () => {
  const { collections } = useSelector((state) => state.shop);

  return (
    <div className="shop-page">
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

export default Shop;
