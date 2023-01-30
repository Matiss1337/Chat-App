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
    console.log(socket.id);

socket.on("disconnect", () => {
    console.log("User has disconnected", socket.id);
    })
})
//listening to the connection event and logging the socket id plus disconnecting


server.listen(3001, () => {
    console.log("Server is running")})
