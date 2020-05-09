import React from 'react';
/* Components */
import Button from './button';
import Icon from './icons/icon';

import CloseSVG from '../assets/icons/cancel.svg';

const CardPageTitle = ({ text, onClick }) => {
  return (
    <div className="my-3 d-flex justify-content-between align-items-center">
      <h2>{text}</h2>
      <Button onClick={onClick} className="cart-close">
        <Icon name={CloseSVG} alt="Close Shopping Cart" />
      </Button>
    </div>
  );
};

export default CardPageTitle;
