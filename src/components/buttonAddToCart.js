import React from 'react';
import Check from '../assets/icons/check.svg';

const AddToCartButton = ({ inCart, addItemToCart }) => {
  const added = inCart ? 'success animated pulse' : 'primary';
  return (
    <button
      style={{ width: 150, animationDuration: '200ms' }}
      className={`btn btn-${added} btn-sm m-3 add-to-cart-btn`}
      onClick={addItemToCart}>
      {inCart ? (
        <div>
          <img
            style={{ height: 16, marginRight: 10 }}
            src={Check}
            alt="Add to Shopping Cart"
          />
          <span>In Cart</span>
        </div>
      ) : (
        <p>+ Add to Cart</p>
      )}
    </button>
  );
};

export default AddToCartButton;
