import React from 'react';

const ShoppingCartItem = ({ cartItem, id }) => {
  const item = cartItem(id);
  const round = (n) => Math.round(n);
  const {
    data: { name, price, imgUrl, quantity },
    subtotal,
  } = item;
  return (
    <ul className="p-0 mb-3 l-grid">
      <li className="l-grid-images">
        <img src={imgUrl} alt={name} />
      </li>
      <li className="cart-item-name">{name}</li>
      <li className="cart-item-quantity d-flex">
        <span
          className="counter pointer badge badge-light"
          onClick={item.increment}>
          +
        </span>
        <span className="badge badge-dark">{quantity}</span>
        <span
          className="counter pointer badge badge-light"
          onClick={item.decrement}>
          -
        </span>
      </li>
      <li className="cart-item-price">${round(price)}</li>
      <li className="cart-item-price">${round(subtotal)}</li>
      <li className="cart-item-remove pointer text-muted" onClick={item.toggle}>
        Remove
      </li>
    </ul>
  );
};
export default ShoppingCartItem;
