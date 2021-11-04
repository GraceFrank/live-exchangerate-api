import * as http from 'http';
import * as express from 'express';
import {Server, Socket} from 'socket.io';
import Exchange_Rate from './types/ExchangeRate';
import {getExchangeRate} from './helpers/api';
import CronJob from './helpers/cronjob';

const PORT: number = Number(process.env.PORT) || 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

async function callAPIandEmitExchangeRate() {
  try {
    console.log('-------Starting New Cycle--------');
    const exchangeRates: Exchange_Rate[] = await Promise.all([
      getExchangeRate('btc', 'usd'),
      getExchangeRate('eth', 'usd'),
      getExchangeRate('dot', 'usd'),
      getExchangeRate('ada', 'usd'),
      getExchangeRate('bnb', 'usd'),
      getExchangeRate('btt', 'usd'),
      getExchangeRate('dash', 'usd'),
      getExchangeRate('doge', 'usd'),
    ]);
    io.emit('exchangeRateUpdate', exchangeRates);
  } catch (err) {
    console.log('ERROR', err);
  }
}

io.on('connection', (socket: Socket) => {
  console.log('Socket connnected');
  const cronJob = new CronJob(callAPIandEmitExchangeRate);
  cronJob.start();
});

server.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}!`);
});
