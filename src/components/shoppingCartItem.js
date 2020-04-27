import React, { useState } from 'react';

const ShoppingCartItem = ({ id, name, imgUrl, price, removeItemFromCart }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <li className="list-group-item d-flex justify-content-start align-items-center mb-3">
      <div className="cart-item-image">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="cart-item-name mr-5">
        <h3>{name}</h3>
      </div>
      <div className="cart-item-quantity mr-5 d-flex">
        <span className="badge badge-primary mr-2">{quantity}</span>
        <span
          className="increment badge badge-light badge-pill mr-1"
          onClick={() => (quantity === 10 ? null : setQuantity(quantity + 1))}>
          +
        </span>
        <span
          className="decrement badge badge-light badge-pill"
          onClick={() => (quantity === 1 ? null : setQuantity(quantity - 1))}>
          -
        </span>
      </div>
      <div className="cart-item-price mr-5">
        <h6>${price}</h6>
      </div>
      <div className="cart-item-price mr-5">
        <h6>${price * quantity}</h6>
      </div>
      <div className="mr-3 ml-auto" onClick={() => removeItemFromCart(id)}>
        <span className="btn btn-sm">Remove</span>
      </div>
    </li>
  );
};
export default ShoppingCartItem;
