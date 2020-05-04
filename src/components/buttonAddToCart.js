import React from 'react';
import Icon from './icons/icon';
import CheckSVG from '../assets/icons/check.svg';

const AddToCartButton = ({ inCart, cartItem }) => {
  const added = inCart ? 'success animated pulse' : 'primary';
  return (
    <button
      style={{ width: 150, animationDuration: '200ms' }}
      className={`btn btn-${added} btn-sm m-3 add-to-cart-btn`}
      onClick={cartItem.toggle}>
      {inCart ? (
        <div>
          <Icon width={16} name={CheckSVG} alt="Add to Shopping Cart" />
          <span className="ml-2">In Cart</span>
        </div>
      ) : (
        <p>+ Add</p>
      )}
    </button>
  );
};

export default AddToCartButton;
