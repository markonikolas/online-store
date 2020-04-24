import React, { useState } from 'react';
// import Fade from 'react-reveal';

/* Components */
import Icon from './icon';
import Navigation from './navigation';

/* Icons */
import Cart from '../assets/icons/shopping-cart.svg';
import User from '../assets/icons/user.svg';
import Menu from '../assets/icons/menu.svg';

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const open = isOpened ? 'is-opened' : '';
  return (
    <header
      className={`container-fluid d-flex justify-content-between flex-wrap ${open}`}>
      <div className="logo">
        <h1>Online Store</h1>
      </div>
      <div className="icons d-flex align-items-center">
        <Icon name={Cart} badge={true} />
        <Icon name={User} />
        <Icon name={Menu} onClick={() => setIsOpened(!isOpened)} />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
