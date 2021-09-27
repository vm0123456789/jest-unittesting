const { expect, it } = require("@jest/globals");
const orderTotal = require("./order_count.js");

it("Works", () => {});

it("One equals one", () => {
  expect(1).toBe(1);
});

it("Quantity", () => {
  expect(
    orderTotal({
      items: [
        { name: "Dracon candy", price: 2, quantity: 3 },
        { name: "Shipping", price: 10, shipping: true },
      ],
    })
  ).toBe(16);
});
