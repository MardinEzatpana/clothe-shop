import React, { useState } from "react";
import CollectionPreview from "../../components/collectionPreview/CollectionPreview";
import SHOP_DATA from "../../data/shopData";
import "./shop.scss";

const Shop = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollection }) => (
        <CollectionPreview key={id} {...otherCollection} />
      ))}
    </div>
  );
};

export default Shop;
