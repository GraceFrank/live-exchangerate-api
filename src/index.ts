import * as dotenv from 'dotenv';
import * as http from 'http';
import * as express from 'express';
import {Server, Socket} from 'socket.io';
dotenv.config();

const PORT: number = Number(process.env.PORT) || 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket: Socket) => {
  console.log('socket', socket);
  console.log('connnected');
});

io.emit('chat', [
  {
    ticker: {
      base: 'usdt',
      target: 'usdt',
      price: 1234,
      volume: 1234,
      change: 1234,
    },
    timestamp: 1234,
    success: true,
    error: '',
  },
]);

server.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}!`);
});
