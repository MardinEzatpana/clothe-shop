import React from "react";
import CollectionItem from "../collectionItem/CollectionItem";

import "./collectionPreview.scss";

const CollectionPreview = ({collection}) => {
  const { title, items } = collection;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
