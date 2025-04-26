const WebSocket = require("ws");

const webSocketServer = new WebSocket.Server({
  port: process.env.PORT || 4000,
});

webSocketServer.on("connection", (webSocketConnection) => {
  webSocketConnection.on("message", (message) => {
    console.log("Received:", message);
    broadcast(message);
  });
});

function broadcast(data) {
  webSocketServer.clients.forEach((client) => {
    client.send(data);
  });
}
