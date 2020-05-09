import React from 'react';

/* Components */
import StaticField from './staticField';
import Button from './button';
import PageToRender from './pageToRender';
import OrderMessage from './orderMessage';

const ShoppingCart = ({
  setPageNumber,
  closeCart,
  cartItem,
  cartItems,
  cartOpen,
  onChange,
  onSubmit,
  pageNumber,
  userDetails,
  resetOrder,
}) => {
  const transition = cartOpen
    ? 'absolute fadeInDownBig'
    : 'absolute fadeOutUpBig';
  const page = setPageNumber();
  const isLastPage = pageNumber === 3 ? 'd-none' : '';

  return cartItems.length ? (
    isLastPage ? (
      <OrderMessage className={transition} resetOrder={resetOrder} />
    ) : (
      <div className={`m-3 animated ${transition}`}>
        <PageToRender
          cartItem={cartItem}
          cartItems={cartItems}
          closeCart={closeCart}
          pageNumber={pageNumber}
          onChange={onChange}
          onSubmit={onSubmit}
          {...userDetails}
        />

        <StaticField
          aditionalClass={`l-custom-grid container-fluid ${isLastPage}`}>
          <label
            className="p-3 pointer"
            htmlFor="submit"
            onClick={() =>
              pageNumber === 0 || pageNumber === 2 ? page.next() : null
            }>
            {pageNumber === 2 ? 'Order' : 'Next'}
          </label>
          <Button onClick={() => (pageNumber === 0 ? null : page.prev())}>
            <b>Prev</b>
          </Button>
          <Button onClick={() => resetOrder()}>
            <b>Cancel</b>
          </Button>
        </StaticField>
      </div>
    )
  ) : (
    <div className={'m-3 animated ' + transition}>
      <small className="m-3 pb-3 pt-3 text-muted text-center no-select">
        Shopping Cart is empty.
      </small>
    </div>
  );
};

export default ShoppingCart;
