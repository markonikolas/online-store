import React, { useState } from 'react';

const ShoppingCartItem = ({
  items: { id, name, price, quantity, subtotal, imgUrl },
  removeItemFromCart,
}) => {
  return (
    <ul className="list-group-item mb-3 l-grid">
      <li className="l-grid-images">
        <img src={imgUrl} alt={name} />
      </li>
      <li className="cart-item-name">{name}</li>
      <li className="cart-item-quantity d-flex">
        <span className="badge badge-primary mr-2">{quantity}</span>
        {/* <span
          className="increment pointer badge badge-light badge-pill mr-1"
          onClick={() => (quantity === 10 ? null : setQuantity(quantity + 1))}>
          +
        </span>
        <span
          className="decrement pointer badge badge-light badge-pill"
          onClick={() => (quantity === 1 ? null : setQuantity(quantity - 1))}>
          -
        </span> */}
      </li>
      <li className="cart-item-price"></li>
      <li className="cart-item-price">${Math.round(subtotal)}</li>
      <li
        className="cart-item-remove pointer text-muted"
        onClick={() => removeItemFromCart(id)}>
        Remove
      </li>
    </ul>
  );
};
export default ShoppingCartItem;
