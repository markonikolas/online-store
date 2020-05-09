import React from 'react';
import CartPageTitle from './cartPageTitle';
import StaticField from './staticField';

const OrderDetails = ({
  className,
  closeCart,
  cartItems,
  orderID,
  priceTotal,
}) => {
  /* returns Date.now() + 5 days */
  const getEstimatedDelivery = new Date(
    Date.now() + 5 * 24 * 60 * 60 * 1000,
  ).toLocaleDateString();

  return (
    <div className={'container-fluid ' + className}>
      <CartPageTitle text="Order Details" onClick={closeCart} />
      <StaticField>
        <li>Ordered Items</li>
      </StaticField>
      <StaticField aditionalClass="d-flex flex-column align-items-stretch">
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
        <li className="flex-grow-1">Order {orderID}</li>
        <li className="flex-grow-1">
          Estimated Delivery {getEstimatedDelivery}
        </li>
        <li>Price Total: ${Math.round(priceTotal)}</li>
      </StaticField>
    </div>
  );
};

export default OrderDetails;
