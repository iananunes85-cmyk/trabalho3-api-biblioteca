
function configurarEventos(io) {
  io.on("connection", (socket) => {
    console.log(`Cliente conectado: ${socket.id}`);

    socket.on("entrar-sala", (nomeSala) => {
      const salasPermitidas = [
        "livros",
        "estudantes",
        "emprestimos",
        "categorias"
      ];

      if (!salasPermitidas.includes(nomeSala)) {
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
      socket.leave(nomeSala);

      socket.emit("saiu-sala", {
        sala: nomeSala,
        mensagem: `Você saiu da sala ${nomeSala}.`
      });
    });

    socket.on("disconnect", () => {
      console.log(`Cliente desconectado: ${socket.id}`);
    });
  });
}

module.exports = configurarEventos;
