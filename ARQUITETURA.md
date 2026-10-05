# Arquitetura do Trabalho 3

Este documento apresenta a arquitetura utilizada na refatoração da API
da Biblioteca Escolar, realizada no Trabalho 3.

A refatoração teve como objetivo organizar melhor as responsabilidades
da aplicação, reduzir o acoplamento entre as partes do sistema e facilitar
a manutenção e a evolução do código.

## 1. Arquitetura em camadas

A aplicação foi organizada nas seguintes camadas:

```text
Cliente HTTP
     |
     v
  Routes
     |
     v
Controllers
     |
     v
  Services
     |
     v
Repositories
     |
     v
   Prisma
     |
     v
   SQLite