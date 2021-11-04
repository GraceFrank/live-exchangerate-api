'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const dotenv = require('dotenv');
const http = require('http');
const express = require('express');
const socket_io_1 = require('socket.io');
const api_1 = require('./helpers/api');
const cronjob_1 = require('./helpers/cronjob');
dotenv.config();
const PORT = Number(process.env.PORT) || 3000;
const app = express();
const server = http.createServer(app);
const io = new socket_io_1.Server(server, {
  cors: {
    origin: '*',
  },
});
io.on('connection', socket => {
  console.log('Socket connnected');
  const cronJob = new cronjob_1.default(callAPIandEmitExchangeRate);
  cronJob.start();
});
server.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}!`);
});
async function callAPIandEmitExchangeRate() {
  try {
    const exchangeRate = await (0, api_1.getExchangeRate)('btc', 'usd');
    console.log('EXCHANGE RATE', exchangeRate);
    io.emit('exchangeRateUpdate', [exchangeRate]);
  } catch (err) {
    console.log(err);
  }
}
//# sourceMappingURL=index.js.map
