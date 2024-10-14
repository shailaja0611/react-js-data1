const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000', // Adjust as needed
        methods: ['GET', 'POST'],
    },
});

app.use(cors());

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('sendMessage', (message) => {
        io.emit('receiveMessage', message); // Broadcast to all clients
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

