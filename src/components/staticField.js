import React from 'react';

const StaticField = ({ children, aditionalClass = '' }) => {
  const itemClass = 'list-group-item mb-0 l-grid static ' + aditionalClass;
  return <ul className={itemClass}>{children}</ul>;
};

export default StaticField;
