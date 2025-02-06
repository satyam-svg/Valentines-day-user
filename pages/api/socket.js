import { Server } from 'socket.io';

export default function handler(req, res) {
  if (req.method === 'GET') {
    if (!res.socket.server.io) {
      console.log("First use, setting up socket.io");
      const io = new Server(res.socket.server);
      
      io.on('connection', (socket) => {
        console.log('a user connected');
        
        // Listen for the 'send-message' event and log the received message
        socket.on('send-message', (msg) => {
          console.log('Message received:', msg); // Print message in the console
          socket.broadcast.emit('receive-message', msg); // Broadcast the message
        });

        socket.on('disconnect', () => {
          console.log('user disconnected');
        });
      });
      
      res.socket.server.io = io;
    } else {
      console.log("Socket.io already set up");
    }
    res.end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
