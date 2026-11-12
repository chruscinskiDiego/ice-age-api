# Ice Age API

API de estudo em Node.js para gerenciar filmes e personagens da franquia A Era do Gelo.

## Funcionalidades

- Listagem e consulta por ID de filmes e personagens.
- Criação, atualização e remoção dos registros.
- Modelos com Mongoose e validação dos campos.

## Tecnologias

Node.js, Express, MongoDB e Mongoose.

## Executar localmente

Disponibilize um MongoDB de desenvolvimento. Use Node.js com suporte à opção --env-file.

```bash
npm ci
cp .env.example .env
# Ajuste MONGODB_URI para seu banco de desenvolvimento.
node --env-file=.env src/index.js
```

O servidor usa a porta 3000. Sem MONGODB_URI, utiliza um banco local em 127.0.0.1:27017/ice_age.

## Recursos HTTP

| Recurso | Operações |
| --- | --- |
| /films | GET e POST |
| /films/:id | GET, PUT e DELETE |
| /characters | GET e POST |
| /characters/:id | GET, PUT e DELETE |

## Organização

- `src/index.js`: inicialização e conexão.
- `src/models/`: schemas de filmes e personagens.
- `src/routes/`: endpoints.

## Escopo

Exercício de CRUD e persistência com MongoDB. O script npm test é um placeholder. A implementação não inclui autenticação e requer revisão dos fluxos de erro antes de exposição pública. O diretório node_modules está versionado; o .gitignore evita novos arquivos locais, mas não remove os já rastreados.
