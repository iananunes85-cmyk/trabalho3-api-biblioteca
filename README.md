# API da Biblioteca Digital



## Sobre o projeto



A API da Biblioteca Digital foi desenvolvida para gerenciar os dados de uma biblioteca, permitindo operações relacionadas a livros, estudantes e empréstimos. O projeto utiliza Node.js, Express e Prisma, com banco de dados SQLite, além de Socket.IO para comunicação em tempo real.



## Tecnologias utilizadas



- Node.js

- Express

- Prisma ORM

- SQLite

- Socket.IO

- JavaScript

- OpenAPI e Swagger UI



## Funcionalidades



- Consulta e gerenciamento de livros.

- Gerenciamento de estudantes e empréstimos.

- Validação de dados e tratamento de erros.

- Documentação das rotas da API.

- Comunicação em tempo real por meio do Socket.IO.

- Emissão de eventos quando livros são cadastrados, atualizados ou excluídos.



## Como executar o projeto



Instale as dependências:



```bash

npm install

```



Inicie o servidor:



```bash

npm start

```



A API estará disponível em `http://localhost:3000`.



A documentação da API pode ser consultada pela interface Swagger, conforme a rota configurada no projeto.



## Testes realizados



Foram testadas as operações de cadastro, atualização e exclusão de livros. Também foi verificado o funcionamento dos eventos do Socket.IO, que permitem atualizar a interface frontend sem recarregar a página.



## Repositórios



- **Backend/API:** https://github.com/iananunes85-cmyk/trabalho3-api-biblioteca

- **Frontend:** https://github.com/iananunes85-cmyk/biblioteca-digital



## Considerações finais



A integração entre a API e o Socket.IO possibilitou a comunicação em tempo real com a interface da Biblioteca Digital. Dessa forma, o sistema demonstra como eventos podem manter as informações atualizadas e melhorar a experiência de uso.





