'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.getExchangeRate = void 0;
const axios_1 = require('axios');
const API_BASE_URL = process.env.EXCHANGE_RATE_API_BASE_URL;
function getExchangeRate(crypto, fiat) {
  return axios_1.default
    .get(`${API_BASE_URL}${crypto}-${fiat}`)
    .then(res => res.data);
}
exports.getExchangeRate = getExchangeRate;
//# sourceMappingURL=api.js.map
