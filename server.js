const http = require("http");
const { Server } = require("socket.io");

const httpServer = http.createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

const PORT = process.env.PORT || 3000;

io.on("connection", (socket) => {
  console.log("Client connected", socket.id);

  socket.on("mouse", (data) => socket.broadcast.emit("mouse", data));

  socket.on("disconnect", () => console.log("Client has disconnected"));
});

httpServer.listen(PORT, () => {
  console.log(`Socket.io server is running on port ${PORT}`);
});
