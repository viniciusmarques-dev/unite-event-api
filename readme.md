# pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos Funcionais

- [] O organizador deve poder cadastrar um novo evento;
- [] O organizador deve poder visualizar dados de um evento;
- [] O organizador deve poder visualizar a lista de participantes;
- [] O participante deve poder se inscrever em um evento;
- [] O participante deve poder visualizar seu crachá de inscrição;
- [] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [] O participante só pode se inscrever em um evento uma única vez;
- [] O participante só pode se inscrever em eventos com vagas disponíveis;
- [] O participante só pode realizar o check-in em um evento uma única vez;

### Requisitos não funcionais

- [] O check-un no evento será realizado através de um QRCode;

## Anotações

Métodos HTTP, GET, POST, DELETE, PUT, PATCH, READ, OPTIONS...

Corpo da requisição (Request Body) => POST - PUT Criação/Edição de registro associados a um formulário
Parâmetros de busca ( Search Params / Query Parameters) => Ex: ('http://localhost:3333/users?name=Vinicius')
Parâmetros de rota (Route Params) => Identificação de recursos => Ex: DELETE ('http:/localhost:3333/users/5)
Cabeçalhos (Headers) => Contexto

Semânticas = Significado

Driver nativo / Query Builders / ORMs -> Object Relational Mapping (Hibernate / Doctrine / ActiveRecord) JS(Sequelize, *PRISMA*, Drizzle)

Status code's
20_ => Sucesso
30_ => Redirecionamento
40_ => Erro do cliente (Erro em alguma informação enviada por QUEM está fazendo a chamada p/ API)
50_ => Erro do servidor (Um erro que está acontecendo INDEPENDENTE do que está sendo enviado p/ o servidor)