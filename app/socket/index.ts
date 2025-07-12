import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io("http://localhost:3001", {
      withCredentials: true,
    });

    socket.on("connect", () => {
      console.log("✅ Connected to socket:", socket?.id); // ✅ correct timing
    });

    socket.on("disconnect", () => {
      console.log("❌ Disconnected from socket");
    });

    socket.on("connect_error", (err) => {
      console.error("🚨 Socket connection error:", err.message);
    });
  }

  return socket!;
};
