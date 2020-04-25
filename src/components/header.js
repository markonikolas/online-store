import React from 'react';

/* Components */
import Icon from './icons/icon';
import Navigation from './navigation';
import MenuIcon from './icons/menuIcon';
import BadgeIcon from './icons/badgeIcon';

/* Icons */
import Cart from '../assets/icons/shopping-cart.svg';
import User from '../assets/icons/user.svg';
import Menu from '../assets/icons/menu.svg';

const Header = ({ open, setOpen }) => {
  const isOpen = open ? 'is-opened' : '';
  return (
    <header
      className={`container-fluid d-flex justify-content-between flex-wrap ${isOpen}`}>
      <div className="logo">
        <h1>Online Store</h1>
      </div>
      <div className="icons d-flex align-items-center justify-content-between">
        <BadgeIcon name={Cart} alt="Shopping Cart" />
        <Icon name={User} alt="User" />
        <MenuIcon name={Menu} alt="Menu" onClick={setOpen} />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
