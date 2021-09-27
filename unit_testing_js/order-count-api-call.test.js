const { expect, it } = require("@jest/globals");
const orderTotal = require("./order-count-api-call.js");

const emptyFunction = () => {};

it("quantity", () => {
  orderTotal(emptyFunction, {
    items: [{ name: "Dracon candy", price: 2, quantity: 3 }],
  }).then((result) => expect(result).toBe(6));
});

it("calls vatapi.com correctly", () => {
  let isFakeFetchCalled = false;
  const fakeFetch = (url) => {
    expect(url).toBe("https://vatapi.com/v1/country-code-check?code=DE");
    isFakeFetchCalled = true;
    return Promise.resolve({
      json: () =>
        Promise.resolve({
          rates: {
            standard: {
              value: 19,
            },
          },
        }),
    });
  };
  orderTotal(fakeFetch, {
    country: "DE",
    items: [{ name: "Dracon waffles", price: 20, quantity: 2 }],
  }).then((result) => {
    expect(result).toBe(20 * 2 * 1.19);
    expect(isFakeFetchCalled).toBe(true);
  });
});

it("if country code specified");
