import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Category from '../../../components/category/Category';

import './categoryPage.scss';

const CategoryPage = () => {
  const { collections } = useSelector((state) => state.shop);
  const {collectionId} = useParams()
   
  return (
    <div className="collection-page">
      {collections.map(collection => collection.routeName === collectionId ? (
        <Category key={collection.id} collection={collection} />
      ):'')}
    </div>
  );
};

export default CategoryPage;
