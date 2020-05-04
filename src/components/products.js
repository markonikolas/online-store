import React from 'react';
import ProductItem from './productItem';
import { Element } from 'react-scroll';

const Products = ({ db, cartItem }) => {
  return (
    <Element className="mb-3" name="products">
      <div className="container-fluid d-flex flex-column">
        <h1 className="body-title mb-5">Products</h1>
        <div className="products">
          {db.map((obj, i) => (
            <ProductItem
              {...obj}
              key={obj.id}
              cartItem={() => cartItem(obj.id)}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Products;
