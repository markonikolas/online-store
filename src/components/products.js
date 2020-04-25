import React from 'react';
import ProductItem from './productItem';
import ScrollableAnchor from 'react-scrollable-anchor';

const Products = ({ db }) => {
  console.log(db);
  return (
    <ScrollableAnchor id="products">
      <div className="body container-fluid">
        <h1 className="body-title mb-5">Products</h1>
        <div className="products">
          {db.map((obj) => (
            <ProductItem {...obj} />
          ))}
        </div>
      </div>
    </ScrollableAnchor>
  );
};

export default Products;
