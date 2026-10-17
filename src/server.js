
require("dotenv/config");

const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");
const configurarEventos = require("./sockets/eventos.socket");

const PORT = process.env.PORT || 3000;

const servidor = http.createServer(app);

const io = new Server(servidor, {
  cors: {
    origin: "*"
  }
});

configurarEventos(io);

app.set("io", io);

servidor.listen(PORT, () => {
  console.log(
    `Servidor rodando em http://localhost:${PORT}`
  );
});
