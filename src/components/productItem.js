import React from 'react';

const ProductItem = ({ imgUrl, name, price }) => {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imgUrl} alt={name} />
      </div>
      <h6>{name}</h6>
      <h4>${price}</h4>
    </div>
  );
};

export default ProductItem;
