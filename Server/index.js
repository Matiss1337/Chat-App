const express = require('express');
const app = express();
const http = require('http');
// socket.io
const cors = require('cors');
// for socket.io error handling


app.use(cors());

const server = http.createServer(app);

server.listen(3001, () => {
    console.log("Server is running")})
