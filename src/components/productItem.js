import React from 'react';
import AddToCartButton from './buttonAddToCart';

const ProductItem = ({
  imgUrl,
  name,
  price,
  inCart,
  description,
  onProductClick,
  addItemToCart,
}) => {
  return (
    <div className="product-item container-fluid" onClick={onProductClick}>
      <div className="product-image d-flex flex-grow-1 p-3">
        <img src={imgUrl} alt={name} />
      </div>
      <h6 className="text-center align-self-center m-3">{name}</h6>
      <h4 className="text-center align-self-center m-3">${price}</h4>
      <p className=" align-self-start d-none m-3">{description}</p>
      <AddToCartButton inCart={inCart} addItemToCart={addItemToCart} />
    </div>
  );
};

export default ProductItem;
