import React from 'react';
import CollectionItem from '../shop/collectionItem/CollectionItem';

import './category.scss';

const Category = ({collection}) => {
  const { title, items } = collection;
  
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
