import React from 'react';

const StaticField = ({ alt, icon, onClick, children, aditionalClass = '' }) => {
  const itemClass = 'list-group-item mb-0 l-grid static ' + aditionalClass;
  return (
    <ul className={itemClass}>
      {children}
      <li className="pointer ml-2 cart-close" onClick={onClick}>
        <img src={icon} alt={alt} />
      </li>
    </ul>
  );
};

export default StaticField;
