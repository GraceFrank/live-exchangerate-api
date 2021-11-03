import * as dotenv from 'dotenv';
import * as http from 'http';
import * as express from 'express';
import {Server, Socket} from 'socket.io';
dotenv.config();

const PORT: number = Number(process.env.PORT) || 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket: Socket) => {
  console.log('socket', socket);
  console.log('connnected');

  io.on('chat', payload => {
    console.log('What is payload ', payload);
    io.emit('chat', payload);
  });
});

server.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}!`);
});
