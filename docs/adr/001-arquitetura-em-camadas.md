# ADR 001 — Arquitetura em camadas e Repository

## Contexto

A API da Biblioteca Escolar precisava ser refatorada para melhorar a
separação das responsabilidades e facilitar a manutenção do sistema.

Na estrutura anterior, o acesso aos dados estava diretamente ligado ao
código dos Repositories e as responsabilidades das diferentes partes
da aplicação não estavam tão bem separadas.

## Decisão

Adotar uma arquitetura em camadas, separando:

- Routes;
- Controllers;
- Services;
- Repositories;
- Middlewares.

Também foi adotado o padrão Repository para concentrar o acesso aos
dados e impedir que Controllers e Services acessem diretamente o Prisma.

## Consequências

Como consequência positiva, cada camada passa a ter uma responsabilidade
mais clara, facilitando a manutenção e a evolução da aplicação.

Também fica mais fácil substituir ou testar a camada de persistência.

Como consequência negativa, o projeto passa a ter mais arquivos e uma
estrutura um pouco mais extensa do que a implementação inicial.