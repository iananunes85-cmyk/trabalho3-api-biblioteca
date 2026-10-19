
function configurarEventos(io) {
  const salasPermitidas = [
    "livros",
    "estudantes",
    "emprestimos",
    "categorias"
  ];

  io.on("connection", (socket) => {
    console.log(`Cliente conectado: ${socket.id}`);

    socket.on("entrar-sala", (nomeSala) => {
      if (
        typeof nomeSala !== "string" ||
        !salasPermitidas.includes(nomeSala)
      ) {
        socket.emit("erro-sala", {
          mensagem: "Sala inválida."
        });
        return;
      }

      socket.join(nomeSala);

      socket.emit("entrou-sala", {
        sala: nomeSala,
        mensagem: `Você entrou na sala ${nomeSala}.`
      });
    });

    socket.on("sair-sala", (nomeSala) => {
      if (
        typeof nomeSala !== "string" ||
        !salasPermitidas.includes(nomeSala)
      ) {
        socket.emit("erro-sala", {
          mensagem: "Sala inválida."
        });
        return;
      }

      socket.leave(nomeSala);

      socket.emit("saiu-sala", {
        sala: nomeSala,
        mensagem: `Você saiu da sala ${nomeSala}.`
      });
    });

    socket.on("disconnect", (motivo) => {
      console.log(
        `Cliente desconectado: ${socket.id}. Motivo: ${motivo}`
      );
    });
  });
}

module.exports = configurarEventos;
