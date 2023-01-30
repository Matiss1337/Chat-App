const express = require('express');
const app = express();
const http = require('http');
// so i can have socket.io
const cors = require('cors');
// for socket.io error handling
const {Server} = require("socket.io");
// actual socket.io

app.use(cors());

const server = http.createServer(app);


const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});


io.on("connection", (socket) => {
    console.log(`${socket.id} has connected`);

socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`${socket.id} has joined room ${data}`);
})

socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data)
})
socket.on("disconnect", () => {
    console.log(`${socket.id} has disconnected`);
    })
})



server.listen(3001, () => {
    console.log("Server is running")})
