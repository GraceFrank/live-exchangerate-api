"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const http = require("http");
const express = require("express");
dotenv.config();
const app = express();
const server = http.createServer(app);
// const io = socketio(server);
// server.listen(port, () => {
//   console.log(`Server is up on port ${port}!`);
// });
//# sourceMappingURL=index.js.map