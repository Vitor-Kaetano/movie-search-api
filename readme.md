# 🎬 CineSearch API

Uma API REST para descobrir e buscar filmes e séries, utilizando a [API do TMDB](https://developer.themoviedb.org/) como fonte de dados. Desenvolvida com Node.js e Express, seguindo a arquitetura MVC.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Endpoints](#endpoints)
- [Licença](#licença)

---

## Visão Geral

A CineSearch API funciona como uma camada intermediária entre o cliente e a API do TMDB, mantendo o token de autenticação seguro no servidor, centralizando a lógica de filtragem e formatando os dados antes de devolvê-los ao consumidor.

---

## Funcionalidades

- 🎥 Listagem de filmes e séries populares
- 🔍 Busca por título
- 🎛️ Filtros por gênero, ano de lançamento e avaliação mínima
- 🔒 Token da API do TMDB mantido no servidor

---

## Tecnologias

- Node.js
- Express
- API do TMDB

---

## Estrutura do Projeto

```
src/
├── models/
│   ├── apiClient.js       # Lógica de fetch e comunicação com o TMDB
│   ├── Movie.js           # Classe Movie
│   └── TvShow.js          # Classe TvShow
├── controller/
│   └── controller.js      # Handlers das rotas e lógica de filtros
├── routes/
│   └── routes.js          # Definição das rotas Express
└── server.js              # Configuração do servidor
```

---

## Como Executar

### Pré-requisitos

- Node.js 20.6 ou superior
- Uma conta no TMDB e um token de API — obtenha em [themoviedb.org](https://www.themoviedb.org/settings/api)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cinesearch-api.git
cd cinesearch-api

# Instale as dependências
npm install
```

### Executando o servidor

```bash
node --env-file=.env src/server.js
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

## Endpoints

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
GET /tv?language=pt-BR&vote_average=8
GET /tv/search?query=breaking+bad
```

