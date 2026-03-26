<div align="center">

# 🪝 webhook.inspect

*Capture, inspecione e gere handlers para seus webhooks em tempo real.*

<img src="https://img.shields.io/github/last-commit/joschonarth/webhook-inspector?style=default&logo=git&logoColor=white&color=818cf8&labelColor=27272a" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/joschonarth/webhook-inspector?style=default&color=818cf8&labelColor=27272a" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/joschonarth/webhook-inspector?style=default&color=818cf8&labelColor=27272a" alt="repo-language-count">
<a href="./README.md">
  <img src="https://img.shields.io/badge/lang-en-27272a?style=default&labelColor=27272a&color=818cf8" alt="en">
</a>

---

📃 [Sobre](#-sobre)&nbsp;&nbsp;•&nbsp;&nbsp;
🛠️ [Tecnologias](#️-tecnologias)&nbsp;&nbsp;•&nbsp;&nbsp;
✨ [Funcionalidades](#-funcionalidades)&nbsp;&nbsp;•&nbsp;&nbsp;
🚀 [Como rodar](#-como-rodar)

</div>

---

<img width="2880" height="1618" alt="webhook-inspect" src="https://github.com/user-attachments/assets/42f45682-e153-4f5c-99da-511db0155abc" />

---

## 📃 Sobre

O **webhook.inspect** é uma ferramenta para desenvolvedores capturarem e inspecionarem requisições de webhook em tempo real. Basta apontar qualquer serviço externo para a URL de captura e visualizar instantaneamente todos os detalhes da requisição — headers, body, query params, IP e muito mais. O projeto também conta com geração automática de handlers TypeScript com Zod via IA (Google Gemini), criando o código de tratamento do webhook com base nos payloads capturados.

---

## 🗂️ Estrutura do Monorepo

Este projeto é um **pnpm monorepo** com dois pacotes:

```
webhook-inspector/
├── api/        # API REST com Node.js + Fastify
└── web/        # SPA com React + TanStack Router
```

---

## 🛠️ Tecnologias

### API (`api/`)

- 🟢 **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript server-side.
- ⚡ **[Fastify](https://fastify.dev/)** — Framework web focado em performance e baixo overhead.
- 🟦 **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática e segurança em tempo de desenvolvimento.
- 🗃️ **[Drizzle ORM](https://orm.drizzle.team/)** — ORM moderno e type-safe para TypeScript.
- 🐘 **[PostgreSQL](https://www.postgresql.org/)** — Banco de dados relacional robusto e confiável.
- 🐳 **[Docker](https://www.docker.com/)** — Containerização do banco de dados para ambiente reproduzível.
- 🤖 **[Vercel AI SDK](https://sdk.vercel.ai/)** — Geração de handlers TypeScript via Google Gemini.
- 📖 **[Scalar](https://scalar.com/)** — Documentação interativa da API.
- 💎 **[Zod](https://zod.dev/)** — Validação e parsing de schemas com inferência de tipos.
- 🔍 **[Biome](https://biomejs.dev/)** — Linting e formatação de código de alta performance.

### Web (`web/`)

- ⚛️ **[React](https://react.dev/)** — Biblioteca para construção de interfaces declarativas.
- ⚡ **[Vite](https://vitejs.dev/)** — Build tool moderna com hot reload ultrarrápido.
- 🛣️ **[TanStack Router](https://tanstack.com/router)** — Roteamento file-based com type safety completo.
- 🏝️ **[TanStack Query](https://tanstack.com/query)** — Gerenciamento de estado assíncrono e cache.
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** — Estilização utilitária direto no JSX.
- 🧩 **[Radix UI](https://www.radix-ui.com/)** — Componentes acessíveis e sem estilo para composição de UI.
- ✨ **[Shiki](https://shiki.style/)** — Syntax highlighting com tema Vesper para exibição de código.
- 🔍 **[Biome](https://biomejs.dev/)** — Linting e formatação de código de alta performance.

---

## ✨ Funcionalidades

- [x] 🪝 Captura de requisições webhook de qualquer método HTTP
- [x] 🔍 Inspeção detalhada de headers, body, query params e IP
- [x] 📋 Cópia rápida da URL de captura
- [x] 🤖 Geração automática de handlers TypeScript com Zod via IA
- [x] 🗑️ Deleção de webhooks capturados
- [x] ♾️ Listagem com infinite scroll e paginação por cursor
- [x] 💀 Skeleton screens para todos os estados de carregamento

---

## 🚀 Como rodar

### 📋 Pré-requisitos

- 🟩 [Node.js 18+](https://nodejs.org/)
- 📦 [pnpm 10.15.0+](https://pnpm.io/)
- 🐳 [Docker](https://www.docker.com/)

### 🔧 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/joschonarth/webhook-inspector.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd webhook-inspector
    ```

3. Instale as dependências de todos os pacotes:

    ```bash
    pnpm install
    ```

### 🔑 Variáveis de ambiente

Configure o arquivo `.env` na pasta `api/` a partir do exemplo:

```bash
cp .env.example .env
```

### 🤖 Google Gemini API Key

Para utilizar a funcionalidade de geração de handlers via IA, você precisará de uma API Key gratuita do Google AI Studio.

1. Acesse **[aistudio.google.com/apikey](https://aistudio.google.com/apikey)**
2. Faça login com sua conta Google
3. Clique em **Create API key**
4. Copie a chave e adicione no seu arquivo `.env`:
```env
GOOGLE_GENERATIVE_AI_API_KEY=sua_chave_aqui
```

### 🐳 Banco de dados

Suba o container do PostgreSQL com Docker a partir da pasta `api/`:

```bash
docker compose up -d
```

Execute as migrations para criar as tabelas:

```bash
pnpm run db:migrate
```

Opcionalmente, popule o banco com dados de seed (60 webhooks simulados do Stripe):

```bash
pnpm run db:seed
```

### ▶️ Execução

**API** (a partir de `api/`):

```bash
pnpm run dev
```

- 🌐 A API estará disponível em **[http://localhost:3333](http://localhost:3333)**.

**Web** (a partir de `web/`):

```bash
pnpm run dev
```

- 🖥️ A aplicação estará disponível em **[http://localhost:5173](http://localhost:5173)**.

---

## 📖 Documentação da API

Com o servidor rodando, acesse a documentação interativa gerada pelo Scalar:

- 📚 **[http://localhost:3333/docs](http://localhost:3333/docs)**

---

## ⭐ Apoie este Projeto

Se curtiu o projeto, deixa uma ⭐ aqui no GitHub — isso ajuda muito!

---

<div align="center">

Feito com ♥ por **[João Otávio Schonarth](https://github.com/joschonarth)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joschonarth)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joschonarth@gmail.com)

</div>