

\# Biblioteca Digital — Aplicação em Tempo Real



\## Sobre o projeto



A Biblioteca Digital é uma aplicação web para gerenciamento de livros, estudantes e empréstimos. O projeto utiliza Node.js, Express, Prisma ORM, SQLite, React e Socket.IO.



A aplicação integra uma API REST documentada, uma interface web e comunicação em tempo real. As alterações nos livros são transmitidas aos clientes conectados, sem necessidade de recarregar a página.



\## Tecnologias utilizadas



\- Node.js e Express

\- React e Vite

\- Prisma ORM

\- SQLite

\- Socket.IO

\- OpenAPI e Swagger UI

\- Docker e Docker Compose



\## Funcionalidades



\- Consulta, cadastro, atualização e exclusão de livros pela API.

\- Gerenciamento de estudantes, empréstimos e categorias.

\- Validação de dados e tratamento de erros.

\- Paginação, filtros e ordenação na listagem de livros.

\- Documentação da API com Swagger.

\- Comunicação em tempo real por meio do Socket.IO.

\- Atualização da interface quando livros são cadastrados, atualizados ou excluídos.

\- Persistência dos dados em banco SQLite.



\## Requisitos



\- Docker instalado e em execução.

\- Docker Compose disponível.



\## Como executar com Docker



Na pasta do projeto, copie o arquivo de exemplo das variáveis de ambiente:



```bash

cp .env.example .env

```



Em seguida, construa a imagem e inicie a aplicação:



```bash

docker compose up -d --build

```



Aguarde a inicialização do contêiner e confira seu estado:



```bash

docker compose ps

```



\## Acessos



\- \*\*Interface web:\*\* http://localhost:3000

\- \*\*Documentação da API:\*\* http://localhost:3000/docs

\- \*\*Verificação de saúde:\*\* http://localhost:3000/health



\## Banco de dados e persistência



O banco utiliza SQLite com Prisma ORM. O Docker Compose mantém os dados em um volume persistente, permitindo que os registros sejam preservados durante a reconstrução ou reinicialização do contêiner.



As migrations podem ser aplicadas dentro do contêiner:



```bash

docker compose exec biblioteca npx prisma migrate deploy

```



O projeto também possui um script de seed. Como esse script pode apagar registros existentes antes de inserir os dados de exemplo, execute-o somente em um ambiente de teste ou após realizar um backup:



```bash

docker compose exec biblioteca npm run seed

```



\*\*Atenção:\*\* não execute o seed no banco com dados que deseja preservar.



\## Testes realizados



Foram realizados testes de cadastro, atualização e exclusão de livros pela API, utilizando a documentação Swagger. Também foi verificada a sincronização das alterações entre duas janelas da interface e a reconexão do Socket.IO após o reinício do contêiner.



O endpoint `/health` foi testado, e a aplicação foi executada com o usuário sem privilégios `node`.



\## Repositórios



\- \*\*Backend/API:\*\* https://github.com/iananunes85-cmyk/trabalho3-api-biblioteca

\- \*\*Frontend:\*\* https://github.com/iananunes85-cmyk/biblioteca-digital



\## Considerações finais



A integração entre React, API REST, Prisma, SQLite, Socket.IO e Docker permite reunir a interface, a persistência e a comunicação em tempo real em uma aplicação integrada. A separação das responsabilidades facilita a manutenção e a evolução do projeto.



