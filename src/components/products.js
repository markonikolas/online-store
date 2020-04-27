import React from 'react';
import ProductItem from './productItem';
import { Element } from 'react-scroll';

const Products = ({ db, productsRef, onProductClick, addItemToCart }) => {
  return (
    <Element className="mb-3" name="products">
      <div className="container-fluid d-flex flex-column">
        <h1 className="body-title mb-5">Products</h1>
        <div className="products" ref={productsRef}>
          {db.map((obj, i) => (
            <ProductItem
              {...obj}
              key={obj.id}
              onProductClick={onProductClick}
              addItemToCart={() => addItemToCart(obj.id)}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Products;
