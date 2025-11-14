import express from "express";
import cors from "cors";
import { PeerServer } from "peer";

const app = express();

app.use(cors());

// PeerJS server
const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: "/peerjs"
});

app.use("/peerjs", (req, res) => {
  res.send("PeerJS server is running!");
});

// Render uses one port → cần listen app
app.listen(process.env.PORT || 9000, () => {
  console.log("Server running...");
});

