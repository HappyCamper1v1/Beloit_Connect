// pages/api/socket.js
import { Server } from "socket.io";

const ioHandler = (req: any, res: any) => {
  if (!res.socket.server.io) {
    console.log("*First connection. Setting up socket.io");
    const io = new Server(res.socket.server);

    io.on("connection", (socket) => {
      socket.on("send-message", (msg) => {
        io.emit("new-message", msg);
      });
    });

    res.socket.server.io = io;
  } else {
    console.log("socket.io already running");
  }
  res.end();
};

export default ioHandler;
