import React from 'react';

const Icon = ({ name, badge, onClick }) => {
  return (
    <div className="icon" onClick={onClick}>
      <img src={name} alt={name} />
      {badge && (
        <span className="badge notification badge-danger">
          1 {/* increment value when items are added to cart */}
        </span>
      )}
    </div>
  );
};

export default Icon;
