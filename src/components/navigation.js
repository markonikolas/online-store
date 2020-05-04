import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { animationConfig } from '../animations/scroll';

const Navigation = ({ navigationOpen }) => {
  const fade = navigationOpen ? 'fadeIn' : 'fadeOut';
  return (
    <nav className={`animated ${fade}`}>
      <ul className="d-flex justify-content-end">
        <li className="mr-5">
          <ScrollLink to="products" href="#products" {...animationConfig}>
            Products
          </ScrollLink>
        </li>
        <li className="mr-5">
          <a href="/">What We Do</a>
        </li>
        <li className="mr-2">
          <a href="/">Help</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
