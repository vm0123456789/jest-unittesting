const someOrder = {
  items: [
    { name: "Dragon food", price: 8, quantity: 8 },
    { name: "Dragon cage (small)", price: 800, quantity: 2 },
    { name: "Shipping", price: 40, shipping: true },
  ],
};

const orderTotal = (order) => {
  const totalItems = order.items
    .filter((x) => !x.shipping)
    .reduce((accum, cur) => accum + cur.price * cur.quantity, 0);
  const shippingItem = order.items.find((x) => !!x.shipping);
  // !! - short way to cast a variable to be a boolean (true or false) value.
  const shipping = totalItems > 1000 ? 0 : shippingItem.price;
  return totalItems + shipping;
};

result = orderTotal(someOrder);
console.log(result);

module.exports = orderTotal;
