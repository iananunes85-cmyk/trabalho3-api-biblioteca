require("dotenv/config");

const prisma = require("../database/prisma");

const criarDependencias =
  require("./factory");

const dependencias =
  criarDependencias(prisma);

module.exports = dependencias;