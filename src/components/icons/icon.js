import React from 'react';

const Icon = ({ name, alt, width = 24 }) => {
  return <img className="icon" src={name} alt={alt} width={width} />;
};

export default Icon;
