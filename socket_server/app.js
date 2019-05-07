const express = require('express');
const socketIo = require('socket.io');
//const axios = require('axios');
const port = process.env.PORT || 8000;
const index = require('./index');
const app = express();
app.use(index);
const server = require('http').createServer(app);
const io = socketIo(server); // < Interesting!
//const getApiAndEmit = 'TODO';

io.on('connection', client => {
  io.emit('connected');
  client.on('posted', data => {
    io.emit('chatEmit', data);
  });
  client.on('disconnect', () => {
    io.emit('disconnected');
  });
});
server.listen(8000);
