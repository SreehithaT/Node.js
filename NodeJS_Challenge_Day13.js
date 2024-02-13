const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
      console.log(`Received message: ${message}`);

      ws.send(`Echo: ${message}`);
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
}

setupWebSocket(server);

app.get('/websocket', (req, res) => {
  res.sendFile(__dirname + '/websocket.html');
});
server.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
