import React from 'react';
import Icon from './icon';

const MenuIcon = ({ name, alt, onClick }) => {
  return (
    <div onClick={onClick}>
      <Icon name={name} alt={alt} />
    </div>
  );
};

export default MenuIcon;
