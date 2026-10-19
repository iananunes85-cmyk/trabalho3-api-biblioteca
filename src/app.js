
const express = require("express");
const path = require("path");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();

app.use(express.json());

// Carregar documentação OpenAPI
const swaggerDocument = YAML.load(
  path.join(__dirname, "docs", "openapi.yaml")
);

// Documentação Swagger
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

// Rotas de livros
const livrosRoutes = require("./routes/livros.routes");
app.use(livrosRoutes);

// Rotas de estudantes
const estudantesRoutes = require("./routes/estudantes.routes");
app.use(estudantesRoutes);

// Rotas de empréstimos
const emprestimosRoutes = require("./routes/emprestimos.routes");
app.use(emprestimosRoutes);

// Rotas de categorias
const categoriasRoutes = require("./routes/categorias.routes");
app.use(categoriasRoutes);

// Verificação de saúde da aplicação
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

// Middleware centralizado de erros
const tratarErro = require("./middlewares/erro.middleware");
app.use(tratarErro);

// Caminho dos arquivos de produção do frontend React
const pastaPublica = path.join(__dirname, "..", "public");

// Servir o frontend se a pasta public existir
if (fs.existsSync(pastaPublica)) {
  app.use(express.static(pastaPublica));

  // Disponibilizar a interface React para outras rotas do frontend
  app.get("/{*splat}", (req, res, next) => {
    if (
      req.path.startsWith("/api") ||
      req.path === "/docs" ||
      req.path.startsWith("/docs/")
    ) {
      return next();
    }

    res.sendFile(
      path.join(pastaPublica, "index.html"),
      (erro) => {
        if (erro) {
          next(erro);
        }
      }
    );
  });
}

module.exports = app;
