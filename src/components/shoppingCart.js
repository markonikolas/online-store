import React from 'react';
import ShoppingCartItem from './shoppingCartItem';
import CloseSVG from '../assets/icons/cancel.svg';

const ShoppingCart = ({
  cartItems,
  onClick,
  buttonClicked,
  removeItemFromCart,
}) => {
  return (
    <div className={buttonClicked ? 'show absolute m-3' : 'd-none'}>
      <div className="d-flex flex-column">
        <div className="order-details">
          <ul className="container-fluid d-flex mb-0 p-3">
            <li className="mr-5">Products</li>
            <li className="mr-5">Quantity</li>
            <li className="mr-5">Price</li>
            <li className="mr-5">Subtotal</li>
          </ul>
        </div>
        <ul className="list-group">
          {cartItems.map((item) => (
            <ShoppingCartItem
              key={item.id}
              {...item}
              removeItemFromCart={removeItemFromCart}
            />
          ))}
        </ul>
        <div>Order Total</div>
        <div className="close-cart m-2">
          <img
            src={CloseSVG}
            alt="Close Shopping Cart"
            title="Close"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
