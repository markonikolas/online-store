import React from 'react';
import Icon from './icon';

const BadgeIcon = ({ name, alt }) => {
  const badge = true; /* hardcoded for now */
  return (
    <div>
      <Icon name={name} alt={alt}>
        {badge && <span className="notification badge badge-danger">1</span>}
      </Icon>
    </div>
  );
};

export default BadgeIcon;
