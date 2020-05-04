import React from 'react';
import _ from 'lodash';

/* Icons */
import CloseSVG from '../assets/icons/cancel.svg';
import ArrowRightSVG from '../assets/icons/arrow-right.svg';
/* Components */
import ShoppingCartItem from './shoppingCartItem';
import StaticField from './staticField';
import StaticFieldTop from './staticFieldTop';
import Button from './button';
import Icon from './icons/icon';

const ShoppingCart = ({ onClick, cartItem, cartItems, cartOpen, nextPage }) => {
  const priceTotal = _.reduce(
    cartItems,
    (prev, cur) => {
      const item = cartItem(cur.id);
      return prev + item.subtotal;
    },
    0,
  );

  const transition = cartOpen
    ? 'absolute fadeInDownBig'
    : 'absolute fadeOutUpBig';
  const itemClass = 'list-group-item mb-3 l-grid';

  return cartItems.length ? (
    <div className={'m-3 animated ' + transition}>
      <StaticFieldTop onClick={onClick} />
      {cartItems.map((item) => (
        <ShoppingCartItem
          itemData={item}
          id={item.id}
          key={item.id}
          cartItem={cartItem}
          itemClass={itemClass}
        />
      ))}

      <StaticField aditionalClass="l-custom-grid">
        <li>Total</li>
        <li>${Math.round(priceTotal)}</li>
      </StaticField>

      <StaticField aditionalClass="l-custom-grid">
        <Button>
          <Icon
            name={ArrowRightSVG}
            alt="Next Page"
            width={18}
            onClick={nextPage}
          />
          <b className="ml-1">Next</b>
        </Button>
        <Button>
          <Icon name={CloseSVG} alt="Cancel Order" width={18} />
          <b className="ml-1">Cancel</b>
        </Button>
      </StaticField>
    </div>
  ) : (
    <div className={'m-3 animated ' + transition}>
      <StaticFieldTop onClick={onClick} />
      <small className="m-3 pb-3 pt-3 text-muted text-center no-select">
        Cart is empty.
      </small>
    </div>
  );
};

export default ShoppingCart;
