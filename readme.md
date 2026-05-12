# 🎬 CineSearch API

Pequena API REST em Node.js que expõe endpoints para buscar e listar filmes e séries usando a API do TMDB.

Principais mudanças nesta versão:
- Reestruturado de CLI para uma API Express.
- Endpoints HTTP para `movies` e `tv` com suporte a filtros e busca.
- Uso de variável de ambiente `TMDB_TOKEN` (Bearer token) e `PORT`.

## Estrutura do projeto

```
src/
├── models/
│   └── apiClient.js       # cliente TMDB (usa TMDB_TOKEN)
├── controller/
│   └── controller.js      # handlers das rotas (retornam JSON)
├── routes/
│   └── routes.js          # definições de rota
└── server.js              # servidor Express
```

## Como rodar

1. Instale dependências:

```bash
npm install
```

2. Crie um arquivo `.env` (não versionar) com as variáveis:

```env
TMDB_TOKEN=seu_token_bearer_do_tmdb_aqui
PORT=3000
```

3. Inicie a API:

```bash
npm start
```

O servidor ficará disponível em `http://localhost:3000` por padrão.

## Endpoints

- `GET /movies` — lista filmes (aceita filtros via query string)
- `GET /movies/search?query=...` — busca filmes por título (query obrigatório)
- `GET /tv` — lista séries (aceita filtros)
- `GET /tv/search?query=...` — busca séries por título (query obrigatório)

Parâmetros de consulta suportados:
- `language` (string) — código do idioma (ex: `pt-BR`)
- `with_genres` (number) — ID do gênero TMDB
- `vote_average` (number) — avaliação mínima
- `year` (number) — ano de lançamento
- `query` (string) — termo de busca (nos endpoints `/search`)

Exemplo cURL:

```bash
curl "http://localhost:3000/movies/search?query=parasita&language=pt-BR"
```

## Segurança e observações importantes

- Nunca commit um arquivo `.env` com segredos. Se houver tokens comprometidos, revogue/rotacione imediatamente.
- O projeto atualmente não adiciona proteção (rate limit, autenticação, cache). Recomenda-se adicionar `helmet`, `cors` e `express-rate-limit` em produção.
- Variável usada pelo código: `TMDB_TOKEN` (Bearer). Garanta que seu token seja gerenciado em variáveis de ambiente ou cofre de segredos.

## Próximos passos recomendados

- Adicionar `express-rate-limit`, `helmet` e `cors`.
- Implementar cache (Redis) para reduzir chamadas à API do TMDB.
- Validar e sanitizar input das queries.
- Adicionar testes e CI, e um arquivo `.env.example` sem segredos.

---

Para ver a implementação, confira os arquivos em `src/` (por exemplo [src/server.js](src/server.js#L1) e [src/models/apiClient.js](src/models/apiClient.js#L1)).

