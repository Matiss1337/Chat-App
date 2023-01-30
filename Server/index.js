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
// sets up IO to accept from where our app is running and what methods to accept

io.on("connection", (socket) => {
    console.log(`${socket.id} has connected`);
//original conection event

socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`${socket.id} has joined room ${data}`);
})

//joining room event

socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data)
})
//receiving msg from room and passing it the whole room event


socket.on("disconnect", () => {
    console.log(`${socket.id} has disconnected`);
    })
    //dc event
})



server.listen(3001, () => {
    console.log("Server is running")})
