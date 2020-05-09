import React from 'react';
import _ from 'lodash';

import OrderDetails from './orderDetails';
import UserDetails from './userDetails';
import ShoppingCartList from './shoppingCartList';

const pages = [ShoppingCartList, UserDetails, OrderDetails];

const PageToRender = ({
  cartItem,
  cartItems,
  closeCart,
  pageNumber,
  onChange,
  onSubmit,
}) => {
  const Page = pages[pageNumber];
  const priceTotal = _.reduce(
    cartItems,
    (prev, cur) => {
      const item = cartItem(cur.id);
      return prev + item.subtotal;
    },
    0,
  );
  return (
    <Page
      priceTotal={priceTotal}
      onChange={onChange}
      onSubmit={onSubmit}
      cartItem={cartItem}
      cartItems={cartItems}
      closeCart={closeCart}
      className="animated fadeIn"
    />
  );
};

export default PageToRender;
