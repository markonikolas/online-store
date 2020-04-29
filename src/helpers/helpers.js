import _ from 'lodash';

function calculateSubtotals(itemsInCart) {
  return _.map(itemsInCart, (item) => {
    Object.defineProperty(item, 'quantity', { value: 1 });
    Object.defineProperty(item, 'subtotal', {
      value: item.price * item.quantity,
    });
    return item;
  });
}

export { calculateSubtotals };
