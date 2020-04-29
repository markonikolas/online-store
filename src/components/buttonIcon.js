import React from 'react';

const ButtonIcon = ({ text, icon, alt }) => {
  return (
    <li className="pointer d-flex align-items-center btn btn-sm animated pulse">
      <img src={icon} alt={alt} style={{ width: 16, marginRight: 10 }} />
      <span>{text}</span>
    </li>
  );
};

export default ButtonIcon;
