import React from 'react';
import Icon from './icon';

const BadgeIcon = ({ name, alt, badgeNumber }) => {
  return (
    <div className="icon-badge">
      <Icon name={name} alt={alt} />
      {badgeNumber ? (
        <span className="notification badge badge-dark pointer">
          {badgeNumber}
        </span>
      ) : null}
    </div>
  );
};

export default BadgeIcon;
