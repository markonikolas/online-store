import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <li className={`btn ${className}`} onClick={onClick}>
      {children}
    </li>
  );
};

export default Button;
