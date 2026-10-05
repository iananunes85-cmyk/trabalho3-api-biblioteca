@"
# Trabalho 3 - Refatoração Arquitetural e Padrões de Projeto

API REST para gerenciamento de uma biblioteca escolar, desenvolvida com Node.js, Express, Prisma e SQLite.

## Objetivo

O projeto consiste na refatoração da API desenvolvida nos Trabalhos 1 e 2, buscando melhorar a organização do código, a separação de responsabilidades, a manutenção e a testabilidade da aplicação.

A refatoração mantém o comportamento dos endpoints da API, reorganizando a aplicação em camadas e aplicando padrões de projeto.

## Funcionalidades

A API permite o gerenciamento de:

- Livros
- Estudantes
- Empréstimos
- Categorias

## Tecnologias utilizadas

- Node.js
- Express
- Prisma ORM
- SQLite
- Better SQLite3
- Express Validator
- Swagger / OpenAPI
- Postman
- Git e GitHub

## Arquitetura

A aplicação utiliza uma arquitetura em camadas:

```text
Routes
   ↓
Middlewares
   ↓
Controllers
   ↓
Services
   ↓
Repositories
   ↓
Prisma
   ↓
SQLite