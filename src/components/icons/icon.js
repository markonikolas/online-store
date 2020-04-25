import React from 'react';

const Icon = ({ name, alt, children }) => {
  return (
    <div className="icon">
      <img src={name} alt={alt} />
      {children || null}
    </div>
  );
};

export default Icon;
