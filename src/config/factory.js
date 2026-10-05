const criarLivrosRepository =
  require("../repositories/livros.repository");

const criarEstudantesRepository =
  require("../repositories/estudantes.repository");

const criarEmprestimosRepository =
  require("../repositories/emprestimos.repository");

const criarCategoriasRepository =
  require("../repositories/categorias.repository");

const criarLivrosService =
  require("../services/livros.service");

const criarEstudantesService =
  require("../services/estudantes.service");

const criarEmprestimosService =
  require("../services/emprestimos.service");

const criarCategoriasService =
  require("../services/categorias.service");

function criarDependencias(prisma) {
  const livrosRepository =
    criarLivrosRepository(prisma);

  const estudantesRepository =
    criarEstudantesRepository(prisma);

  const emprestimosRepository =
    criarEmprestimosRepository(prisma);

  const categoriasRepository =
    criarCategoriasRepository(prisma);

  return {
    prisma,

    repositories: {
      livros: livrosRepository,
      estudantes: estudantesRepository,
      emprestimos: emprestimosRepository,
      categorias: categoriasRepository
    },

    services: {
      livros: criarLivrosService(livrosRepository),

      estudantes:
        criarEstudantesService(estudantesRepository),

      emprestimos:
        criarEmprestimosService(emprestimosRepository),

      categorias:
        criarCategoriasService(categoriasRepository)
    }
  };
}

module.exports = criarDependencias;