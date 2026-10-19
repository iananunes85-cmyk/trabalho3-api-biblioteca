# Arquitetura da Biblioteca Digital



## 1. Visão geral



A Biblioteca Digital utiliza uma arquitetura em camadas para organizar as responsabilidades da aplicação e facilitar sua manutenção. O sistema integra uma interface desenvolvida em React, uma API REST com Node.js e Express, comunicação em tempo real com Socket.IO e persistência de dados com Prisma ORM e SQLite.



A aplicação permite gerenciar livros, estudantes, empréstimos e categorias. Também possui documentação da API com Swagger e uma interface web que recebe atualizações dos livros em tempo real.



## 2. Organização das camadas



```mermaid

flowchart TD

&#x20;   A\[Interface React] --> B\[API REST - Express]

&#x20;   B --> C\[Routes]

&#x20;   C --> D\[Middlewares]

&#x20;   D --> E\[Controllers]

&#x20;   E --> F\[Services]

&#x20;   F --> G\[Repositories]

&#x20;   G --> H\[Prisma ORM]

&#x20;   H --> I\[(Banco de dados SQLite)]

&#x20;   E --> J\[Socket.IO]

&#x20;   J --> K\[Salas e eventos em tempo real]

&#x20;   K --> A

```



### Responsabilidades



\- \*\*Interface React:\*\* apresenta os livros, envia requisições à API e recebe eventos do Socket.IO para atualizar a lista em tempo real.

\- \*\*Routes:\*\* define os endpoints e encaminha as requisições aos controllers.

\- \*\*Middlewares:\*\* executa validações e auxilia no tratamento das requisições e dos erros.

\- \*\*Controllers:\*\* recebem as requisições HTTP, acionam os serviços e retornam as respostas. Nas operações de livros, também publicam eventos após operações bem-sucedidas.

\- \*\*Services:\*\* concentram as operações e regras de negócio da aplicação.

\- \*\*Repositories:\*\* isolam o acesso aos dados e organizam as consultas e operações realizadas no banco.

\- \*\*Prisma ORM:\*\* realiza o acesso ao banco de dados SQLite.

\- \*\*Socket.IO:\*\* mantém a comunicação em tempo real entre o servidor e os clientes conectados.

\- \*\*Docker:\*\* permite empacotar e executar a aplicação em um ambiente controlado.



## 3. Fluxo de uma requisição



Em uma operação REST, a interface envia uma requisição ao servidor. A rota recebe a chamada e encaminha a operação ao controller, passando pelas validações configuradas. O controller aciona o serviço, que utiliza o repositório para consultar ou alterar os dados no banco. Em seguida, a resposta retorna à interface.



Nas operações de criação, atualização e exclusão de livros, o controller publica eventos Socket.IO para a sala `livros`. Dessa forma, os clientes conectados podem atualizar a interface sem precisar recarregar a página.



## 4. Padrões de projeto



### 4.1 Repository



O padrão Repository está implementado nos arquivos da pasta `src/repositories`. Essa camada concentra as operações de acesso aos dados, como consultas, criação, atualização e exclusão de registros.



Essa organização facilita a manutenção e reduz a dependência direta das camadas superiores em relação ao mecanismo de persistência.



### 4.2 Injeção de dependência e Factory



A aplicação utiliza uma fábrica de dependências, definida em `src/config/factory.js`, para criar os repositórios e serviços a partir do Prisma.



Essa organização centraliza a criação dos componentes e facilita a manutenção e a substituição de dependências.



### 4.3 Comunicação por eventos



A aplicação utiliza eventos do Socket.IO para comunicar alterações realizadas nos livros aos clientes conectados à sala correspondente.



Esse mecanismo permite que diferentes clientes reajam às alterações sem depender de consultas repetidas à API. A comunicação apresenta características de desacoplamento por eventos, mas não deve ser confundida com uma implementação formal do padrão Observer.



## 5. Comunicação em tempo real



O servidor HTTP é integrado ao Socket.IO. Os clientes podem entrar nas salas `livros`, `estudantes`, `emprestimos` e `categorias`.



Os principais eventos de atualização dos livros são:



| Evento | Payload | Finalidade |

|---|---|---|

| `livro-criado` | Objeto do livro criado | Informa o cadastro de um livro. |

| `livro-atualizado` | Objeto do livro atualizado | Comunica alterações nos dados de um livro. |

| `livro-excluido` | Objeto com o campo `id` | Informa qual livro foi excluído. |



Para gerenciar as salas, são utilizados os eventos `entrar-sala`, `sair-sala`, `erro-sala`, `entrou-sala` e `saiu-sala`. O servidor valida os nomes das salas recebidos dos clientes e registra conexões e desconexões.



O cliente possui tratamento para perda e restabelecimento da conexão. Os eventos de alteração de livros são transmitidos aos clientes que participam da sala `livros`.



## 6. Persistência e containerização



O banco de dados utiliza SQLite com Prisma ORM. As alterações na estrutura do banco são organizadas por migrations, e a aplicação utiliza um volume persistente do Docker para armazenar os dados.



O frontend compilado é servido pelo backend, permitindo que a interface web, a API REST e o Socket.IO sejam acessados pela mesma porta.



O endpoint `/health` permite verificar a disponibilidade do servidor. O contêiner utiliza o usuário `node`, sem privilégios de root, e possui uma verificação de saúde configurada no Docker Compose.



As migrations pendentes são aplicadas durante a inicialização do contêiner. O banco é mantido no volume persistente, evitando que a recriação do contêiner, por si só, apague os dados armazenados.



## 7. Decisões arquiteturais (ADRs)



### ADR 1 — Utilização do Prisma com SQLite



\*\*Contexto:\*\* a aplicação precisa persistir os dados da biblioteca em um banco relacional.



\*\*Decisão:\*\* utilizar SQLite com Prisma ORM.



\*\*Consequências:\*\* a configuração e a execução são simplificadas, mas é necessário gerenciar adequadamente o arquivo do banco e o volume persistente.



### ADR 2 — Utilização do Socket.IO



\*\*Contexto:\*\* as alterações realizadas por um cliente precisam ser refletidas nos demais clientes conectados.



\*\*Decisão:\*\* utilizar Socket.IO com salas e eventos específicos para as operações de livros.



\*\*Consequências:\*\* a interface recebe atualizações sem recarregar a página, mas o servidor precisa validar as mensagens recebidas e gerenciar as conexões.



## 8. Considerações finais



A arquitetura busca manter as responsabilidades organizadas e facilitar a manutenção do sistema. A separação entre rotas, controllers, serviços e repositórios, associada à persistência com Prisma e à comunicação em tempo real, permite integrar as funcionalidades da Biblioteca Digital.



A documentação deve acompanhar a implementação efetiva do código, sendo atualizada sempre que houver mudanças relevantes na arquitetura.
