import React from 'react';
import Icon from './icons/icon';
import { debounceAndThrottle as delay } from '../helpers/helper';

import CheckSVG from '../assets/icons/check-circle.svg';
import PlusSVG from '../assets/icons/plus-circle.svg';
const AddToCartButton = ({ inCart, cartItem }) => {
  const added = inCart ? 'success animated pulse' : 'primary';
  return (
    <button
      style={{ width: 80, animationDuration: '500ms' }}
      className={`btn btn-${added} btn-sm m-3 add-to-cart-btn`}
      onClick={delay(() => cartItem.toggle(), 100)}>
      {inCart ? (
        <div className="d-flex justify-content-between">
          <span className="mr-1">Added</span>
          <Icon width={16} name={CheckSVG} alt="Item Added to Shopping Cart" />
        </div>
      ) : (
        <div className="d-flex justify-content-between">
          <span className="mr-1">Add</span>
          <Icon width={16} name={PlusSVG} alt="Add Item To Shopping Cart" />
        </div>
      )}
    </button>
  );
};

export default AddToCartButton;
