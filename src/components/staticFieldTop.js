import React from 'react';

import StaticField from './staticField';
import Icon from './icons/icon';
import Button from './button';

import CloseSVG from '../assets/icons/cancel.svg';
const StaticFieldTop = ({ onClick }) => {
  return (
    <StaticField>
      <li>Products</li>
      <li>Quantity</li>
      <li>Price</li>
      <li>Subtotal</li>
      <Button onClick={onClick}>
        <Icon name={CloseSVG} alt="Close Shopping Cart" />
      </Button>
    </StaticField>
  );
};

export default StaticFieldTop;
