"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const http = require("http");
const express = require("express");
const socket_io_1 = require("socket.io");
dotenv.config();
const PORT = Number(process.env.PORT) || 3000;
const app = express();
const server = http.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
    },
});
io.on('connection', (socket) => {
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
//# sourceMappingURL=index.js.map