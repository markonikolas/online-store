import React, { useState } from 'react';

/* Components */
import Icon from './icons/icon';
import Navigation from './navigation';
import MenuIcon from './icons/menuIcon';
import BadgeIcon from './icons/badgeIcon';
import ShoppingCart from './shoppingCart';

/* Icons */
import ShoppingCartSVG from '../assets/icons/shopping-cart.svg';
import UserSVG from '../assets/icons/user.svg';
import MenuSVG from '../assets/icons/menu.svg';

const Header = ({ open, setOpen, cartItems, removeItemFromCart }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const isOpen = open ? 'is-opened' : '';
  return (
    <header
      className={`container-fluid d-flex justify-content-between flex-wrap ${isOpen}`}>
      <div className="logo">
        <h1>Online Store</h1>
      </div>
      <div className="icons d-flex align-items-center justify-content-between">
        <BadgeIcon
          name={ShoppingCartSVG}
          alt="Shopping Cart"
          cart={cartItems.length}
          onClick={() => setButtonClicked(!buttonClicked)}
        />
        <Icon name={UserSVG} alt="User" />
        <MenuIcon name={MenuSVG} alt="Menu" onClick={setOpen} />
      </div>
      <Navigation />
      <ShoppingCart
        cartItems={cartItems}
        buttonClicked={buttonClicked}
        removeItemFromCart={removeItemFromCart}
        onClick={() => setButtonClicked(false)}
      />
    </header>
  );
};

export default Header;
