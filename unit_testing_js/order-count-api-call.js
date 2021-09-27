const fetch = require("node-fetch");

const result = fetch('https://vatapi.com/v1/country-code-check?code=DE', {
    headers = {
        'apiKey': process.env.VAT_API_KEY
    }
}).then(response => response.json()).then(data => data.rates.standard.value).then(vat => )

function orderTotal(fetch, order) {
  fetch("https://vatapi.com/v1/country-code-check?code=" + order.country);
  return Promise.resolve(
    order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)
  );
}

module.exports = orderTotal;

// const result = fetch("https://vatapi.com/v1/country-code-check?code=DE", {
//   headers: {
//     apiKey: process.env.VAT_API_KEY,
//   },
// })
//   .then((response) => response.json())
//   .then((data) => data.rates.standard.value);
