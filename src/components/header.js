import React, { useState } from 'react';

/* Components */
import ShoppingCart from './shoppingCart';
import Navigation from './navigation';
import Button from './button';
import Icon from './icons/icon';
import BadgeIcon from './icons/badgeIcon';

/* Icons */
import ShoppingCartSVG from '../assets/icons/shopping-cart.svg';
import UserSVG from '../assets/icons/user.svg';
import MenuSVG from '../assets/icons/menu.svg';

const Header = ({ cartItems, cartItem, nextPage }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const isOpen = navigationOpen ? 'is-opened' : '';

  return (
    <header className={isOpen}>
      <div
        className={`header-container container-fluid d-flex justify-content-between flex-wrap`}>
        <div className="logo">
          <h1>Online Store</h1>
        </div>

        <ul className="icons d-flex justify-content-between align-items-center">
          <Button onClick={() => setCartOpen(!cartOpen)}>
            <BadgeIcon
              name={ShoppingCartSVG}
              alt="Shopping Cart"
              badgeNumber={cartItems.length}
            />
          </Button>

          <Button>
            <Icon name={UserSVG} alt="User" />
          </Button>

          <Button onClick={() => setNavigationOpen(!navigationOpen)}>
            <Icon name={MenuSVG} alt="Menu" />
          </Button>
        </ul>
        <Navigation navigationOpen={navigationOpen} />
      </div>

      <ShoppingCart
        cartOpen={cartOpen}
        cartItem={cartItem}
        cartItems={cartItems}
        nextPage={nextPage}
        onClick={() => setCartOpen(false)}
      />
    </header>
  );
};

export default Header;
