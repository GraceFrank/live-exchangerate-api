import axios from 'axios';
import Exchange_Rate from '../types/ExchangeRate';

const API_BASE_URL: string | undefined = process.env.EXCHANGE_RATE_API_BASE_URL;

export function getExchangeRate(crypto: string, fiat: string) {
  return axios
    .get<Exchange_Rate>(`${API_BASE_URL}${crypto}-${fiat}`)
    .then(res => console.log(res.data));
}
