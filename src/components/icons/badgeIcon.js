import React from 'react';
import Icon from './icon';

const BadgeIcon = ({ name, alt, cart, onClick }) => {
  return (
    <div onClick={onClick}>
      <Icon name={name} alt={alt}>
        {cart && (
          <span className="notification badge badge-danger">
            {cart || null}
          </span>
        )}
      </Icon>
    </div>
  );
};

export default BadgeIcon;

/* dont need items from cart, just the lenght of the list. beacuse i wont manipulate data from header of the document. make another coponent, to header just pass cart.length */
