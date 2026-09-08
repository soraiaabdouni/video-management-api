# Video Management API

API REST desenvolvida em Node.js para gerenciamento de vídeos.

**Node.js + Fastify + PostgreSQL + REST API + Deploy**

Este projeto foi desenvolvido durante meus estudos de Node.js, com o objetivo de praticar a criação de APIs REST, integração com PostgreSQL e operações CRUD.

![Node.js](https://img.shields.io/badge/Node.js-24-green)
![Fastify](https://img.shields.io/badge/Fastify-API-black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Render](https://img.shields.io/badge/Deployed%20on-Render-purple)


## Tecnologias

- Node.js
- Fastify
- PostgreSQL
- Neon
- Render
- REST Client
- Git e GitHub


## Funcionalidades

- Criar vídeos
- Listar vídeos
- Buscar vídeos por título
- Atualizar vídeos
- Excluir vídeos
- Geração de IDs com UUID
- Persistência dos dados em PostgreSQL
- API publicada no Render


## Como executar localmente

1. Clone o repositório
```bash
git clone https://github.com/SEU-USUARIO/video-management-api.git
cd video-management-api
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
PGHOST=
PGDATABASE=
PGUSER=
PGPASSWORD=
ENDPOINT_ID=
```

4. Execute o projeto
```bash
npm run dev
```

A API estará disponível em:
```bash
http://localhost:3000
```


## 🔗 API em produção

A API está publicada no Render:
```bash
https://video-management-api-nslz.onrender.com/videos
```

## Endpoints

| Método | Endpoint             | Descrição               |
| ------ | -------------------- | ----------------------- |
| POST   | `/videos`            | Cria um vídeo           |
| GET    | `/videos`            | Lista os vídeos         |
| GET    | `/videos?search=...` | Busca vídeos por título |
| PUT    | `/videos/:id`        | Atualiza um vídeo       |
| DELETE | `/videos/:id`        | Remove um vídeo         |


## Arquitetura
```bash
Cliente
   ↓
Fastify
   ↓
Rotas da API
   ↓
DatabasePostgres
   ↓
PostgreSQL / Neon
```

## O que pratiquei

Durante o desenvolvimento deste projeto, pratiquei:

- Criação de uma API REST com Node.js
- Desenvolvimento de rotas utilizando Fastify
- Métodos HTTP (GET, POST, PUT, DELETE)
- Manipulação de request e response
- Operações CRUD
- Geração de UUID
- Integração com PostgreSQL
- Variáveis de ambiente
- Testes de API
- Deploy de uma aplicação no Render
- Versionamento com Git e GitHub


## Objetivo

Este projeto faz parte da minha jornada de aprendizado em Node.js e representa uma aplicação prática dos conceitos estudados.

Através dele, pude desenvolver uma API completa, conectá-la a um banco de dados PostgreSQL e realizar seu deploy em um ambiente de produção.