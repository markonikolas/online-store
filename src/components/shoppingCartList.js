import React from 'react';
/* Components */
import ShoppingCartItem from './shoppingCartItem';
import StaticFieldTop from './staticFieldTop';
import StaticField from './staticField';
import CartPageTitle from './cartPageTitle';

const ShoppingCartList = ({
  cartItem,
  cartItems,
  className,
  closeCart,
  priceTotal,
}) => {
  return (
    <div className={'container-fluid ' + className}>
      <CartPageTitle text="Shopping Cart" onClick={closeCart} />
      <StaticFieldTop />
      {cartItems.map((item) => (
        <ShoppingCartItem
          itemData={item}
          id={item.id}
          key={item.id}
          cartItem={cartItem}
          itemClass="mb-3 l-grid"
        />
      ))}
      <StaticField aditionalClass="l-custom-grid">
        <li>Total</li>
        <li>${Math.round(priceTotal)}</li>
      </StaticField>
    </div>
  );
};

export default ShoppingCartList;
