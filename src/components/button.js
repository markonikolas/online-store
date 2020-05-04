import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <li className="btn" onClick={onClick}>
      {children}
    </li>
  );
};

export default Button;
