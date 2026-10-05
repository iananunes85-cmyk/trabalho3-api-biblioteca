# ADR 002 — Dependency Injection e Factory

## Contexto

Durante a refatoração, foi identificada a necessidade de reduzir o
acoplamento entre os Services, Repositories e a camada de persistência.

Os Services precisavam utilizar os Repositories sem conhecer como eles
eram criados, enquanto os Repositories precisavam utilizar o Prisma sem
criar ou buscar essa dependência diretamente.

## Decisão

Adotar Dependency Injection para fornecer as dependências aos
componentes da aplicação.

Os Repositories recebem o Prisma por parâmetro e os Services recebem
seus respectivos Repositories.

Também foi adotado o padrão Factory para centralizar a criação e a
composição dos Repositories e Services.

A Factory recebe o Prisma e cria as dependências necessárias para a
aplicação.

## Consequências

Como consequência positiva, os componentes ficam menos acoplados e
podem receber diferentes implementações de suas dependências.

Isso facilita testes, manutenção e futuras alterações na implementação
da persistência.

A Factory também concentra a criação dos componentes em um único ponto,
facilitando a configuração da aplicação.

Como consequência negativa, a arquitetura passa a ter uma etapa
adicional de configuração e mais abstrações do que a implementação
inicial.