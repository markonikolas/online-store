import React from 'react';

const StaticField = ({ children, aditionalClass = '' }) => {
  const itemClass = 'l-grid static ' + aditionalClass;
  return <ul className={itemClass}>{children}</ul>;
};

export default StaticField;
