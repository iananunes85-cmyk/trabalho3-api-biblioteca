
const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Conexão estabelecida:", socket.id);
  socket.emit("entrar-sala", "livros");
});

socket.on("entrou-sala", (dados) => {
  console.log("Entrada na sala confirmada:", dados);
  console.log("Aguardando eventos de livros...");
});

socket.on("livro-criado", (livro) => {
  console.log("Evento recebido: livro-criado", livro);
});

socket.on("livro-atualizado", (livro) => {
  console.log("Evento recebido: livro-atualizado", livro);
});

socket.on("livro-excluido", (dados) => {
  console.log("Evento recebido: livro-excluido", dados);
});

socket.on("erro-sala", (erro) => {
  console.error("Erro ao entrar na sala:", erro);
});

socket.on("connect_error", (erro) => {
  console.error("Falha na conexão:", erro.message);
});
