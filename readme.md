# 🎬 CineSearch

Uma aplicação full-stack para descobrir e buscar filmes e séries, utilizando a [API do TMDB](https://developer.themoviedb.org/). Desenvolvida com uma API REST em Node.js/Express no backend e React no frontend.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Endpoints da API](#endpoints-da-api)
- [Frontend](#frontend)
- [Licença](#licença)

---

## Visão Geral

O CineSearch permite que usuários explorem filmes e séries populares, filtrem resultados por gênero, ano e avaliação, e busquem por título — tudo através de uma interface limpa e responsiva.

O backend funciona como uma camada intermediária entre o frontend e a API do TMDB, mantendo o token de autenticação seguro no servidor e centralizando a lógica de formatação dos dados.

---

## Funcionalidades

- 🎥 Listagem de filmes e séries populares
- 🔍 Busca por título
- 🎛️ Filtros por gênero, ano de lançamento e avaliação mínima
- 📄 Visualização detalhada de cada título
- 📱 Interface React responsiva
- 🔒 Token da API mantido no servidor

---

## Tecnologias

**Backend**
- Node.js
- Express
- API do TMDB

**Frontend**
- React
- Vite

---

## Estrutura do Projeto

```
movie-search-cli/
├── src/
│   ├── models/
│   │   ├── apiClient.js       # Lógica de fetch e comunicação com o TMDB
│   │   ├── Movie.js           # Classe Movie
│   │   └── TvShow.js          # Classe TvShow
│   ├── controller/
│   │   └── controller.js      # Handlers das rotas e lógica de filtros
│   ├── routes/
│   │   └── routes.js          # Definição das rotas Express
│   └── server.js              # Configuração do servidor Express
├── client/
│   └── src/
│       ├── components/        # Componentes React
│       └── App.jsx
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## Como Executar

### Pré-requisitos

- Node.js 20.6 ou superior
- Uma conta no TMDB e um token de API — obtenha em [themoviedb.org](https://www.themoviedb.org/settings/api)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cinesearch.git
cd cinesearch

# Instale as dependências do backend
npm install

# Instale as dependências do frontend
cd client
npm install
```

### Executando o projeto

```bash
# Inicie o backend (a partir da raiz)
node --env-file=.env src/server.js

# Inicie o frontend (a partir de /client)
npm run dev
```

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
TMDB_TOKEN=seu_token_bearer_do_tmdb_aqui
PORT=3000
```

> Nunca faça commit do arquivo `.env`. Ele já está incluído no `.gitignore`.

---

## Endpoints da API

### Filmes

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/movies` | Lista filmes populares |
| GET | `/movies/search` | Busca filmes por título |

### Séries

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/tv` | Lista séries populares |
| GET | `/tv/search` | Busca séries por título |

### Parâmetros de Consulta

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `language` | string | Código do idioma (ex: `pt-BR`) |
| `with_genres` | number | ID do gênero no TMDB |
| `vote_average` | number | Avaliação mínima (0–10) |
| `year` | number | Ano de lançamento |
| `query` | string | Termo de busca (obrigatório nos endpoints de busca) |

**Exemplos:**

```
GET /movies?language=pt-BR&with_genres=28&vote_average=7&year=2023
GET /movies/search?query=parasita
```

---

## Frontend

O frontend foi desenvolvido com React e Vite. Ele se comunica exclusivamente com a API Express interna, nunca diretamente com o TMDB.

Principais componentes:

- `SearchBar` — campo de busca por título
- `FilterPanel` — filtros de gênero, ano e avaliação
- `MediaList` — renderiza o grid de resultados
- `MediaCard` — exibe as informações de cada filme ou série

---

## Licença

Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.