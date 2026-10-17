
function criarPublicadorEventos(io) {
  function publicar(sala, evento, dados) {
    io.to(sala).emit(evento, dados);
  }

  return {
    publicar
  };
}

module.exports = criarPublicadorEventos;
