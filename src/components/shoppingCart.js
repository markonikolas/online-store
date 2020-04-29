import React from 'react';

/* Icons */
import CloseSVG from '../assets/icons/cancel.svg';
import CartSVG from '../assets/icons/shopping-cart.svg';
/* Components */
import ShoppingCartItem from './shoppingCartItem';
import StaticField from './staticField';
import ButtonIcon from './buttonIcon';

const ShoppingCart = ({
  cartItems,
  onClick,
  buttonClicked,
  removeItemFromCart,
}) => {
  const transition = buttonClicked
    ? 'absolute m-3 animated fadeInDownBig'
    : 'absolute m-3 animated fadeOutUpBig';

  const itemClass = 'list-group-item mb-3 l-grid';
  return cartItems.length ? (
    <div className={transition} style={{ zIndex: 0 }}>
      <StaticField icon={CloseSVG} onClick={onClick} alt="Close Shopping Cart">
        <li>Products</li>
        <li>Quantity</li>
        <li>Price</li>
        <li>Subtotal</li>
      </StaticField>

      {cartItems.map((item) => (
        <ShoppingCartItem
          key={item.id}
          removeItemFromCart={removeItemFromCart}
          itemClass={itemClass}
          items={item}
        />
      ))}

      <StaticField aditionalClass="l-custom-grid">
        <li>Total</li>
        <li>$SUM</li>
      </StaticField>

      <StaticField aditionalClass="l-custom-grid">
        <ButtonIcon text="Place Order" icon={CartSVG} alt="Place Order" />
        <ButtonIcon text="Cancel" icon={CloseSVG} alt="Cancel Order" />
      </StaticField>
    </div>
  ) : (
    <div className={transition}>
      <StaticField icon={CloseSVG} onClick={onClick} alt="Close Shopping Cart">
        <li>Products</li>
        <li>Quantity</li>
        <li>Price</li>
        <li>Subtotal</li>
      </StaticField>
      <p
        className="m-3 text-muted text-center pb-3 pt-3"
        style={{ fontSize: 12, zIndex: 0 }}>
        Cart is empty.
      </p>
    </div>
  );
};

export default ShoppingCart;
