import React from 'react';

const OrderMessage = ({ className, resetOrder }) => {
  setTimeout(() => {
    resetOrder();
  }, 2500);
  return (
    <h1
      className={`d-flex m-3 animated justify-content-center align-items-center thank-you ${className}`}>
      Thanks For Your Order.
    </h1>
  );
};

export default OrderMessage;
