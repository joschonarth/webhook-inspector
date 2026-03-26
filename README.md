<div align="center">

# 🪝 webhook.inspect

*Capture, inspect and generate handlers for your webhooks in real time.*

<img src="https://img.shields.io/github/last-commit/joschonarth/webhook-inspector?style=default&logo=git&logoColor=white&color=818cf8&labelColor=27272a" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/joschonarth/webhook-inspector?style=default&color=818cf8&labelColor=27272a" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/joschonarth/webhook-inspector?style=default&color=818cf8&labelColor=27272a" alt="repo-language-count">
<a href="./README.pt.md">
  <img src="https://img.shields.io/badge/lang-pt--BR-27272a?style=default&labelColor=27272a&color=818cf8" alt="pt-br">
</a>

---

📃 [About](#-about)&nbsp;&nbsp;•&nbsp;&nbsp;
🛠️ [Tech Stack](#️-tech-stack)&nbsp;&nbsp;•&nbsp;&nbsp;
✨ [Features](#-features)&nbsp;&nbsp;•&nbsp;&nbsp;
🚀 [Getting Started](#-getting-started)

</div>

---

<img width="2880" height="1618" alt="webhook-inspect" src="https://github.com/user-attachments/assets/42f45682-e153-4f5c-99da-511db0155abc" />

---

## 📃 About

**webhook.inspect** is a developer tool for capturing and inspecting incoming webhook requests in real time. Point any external service at the capture URL and instantly see everything about the request — headers, body, query params, IP address, and more. It also features AI-powered TypeScript handler generation using Google Gemini, which analyzes the captured payloads and writes production-ready Zod-validated handler code for you.

---

## 🗂️ Monorepo Structure

This is a **pnpm monorepo** with two packages:

```
webhook-inspector/
├── api/        # REST API built with Node.js + Fastify
└── web/        # SPA built with React + TanStack Router
```

---

## 🛠️ Tech Stack

### API (`api/`)

- 🟢 **[Node.js](https://nodejs.org/)** — JavaScript runtime for the server side.
- ⚡ **[Fastify](https://fastify.dev/)** — Fast and low-overhead web framework.
- 🟦 **[TypeScript](https://www.typescriptlang.org/)** — Type safety across the entire codebase.
- 🗃️ **[Drizzle ORM](https://orm.drizzle.team/)** — Lightweight, type-safe ORM for TypeScript.
- 🐘 **[PostgreSQL](https://www.postgresql.org/)** — Reliable relational database.
- 🐳 **[Docker](https://www.docker.com/)** — Containerized database for a consistent dev environment.
- 🤖 **[Vercel AI SDK](https://sdk.vercel.ai/)** — AI-powered handler generation via Google Gemini.
- 📖 **[Scalar](https://scalar.com/)** — Beautiful interactive API documentation.
- 💎 **[Zod](https://zod.dev/)** — Runtime schema validation with full type inference.
- 🔍 **[Biome](https://biomejs.dev/)** — Fast, opinionated linter and formatter.

### Web (`web/`)

- ⚛️ **[React](https://react.dev/)** — Component-based UI library.
- ⚡ **[Vite](https://vitejs.dev/)** — Blazing-fast build tool and dev server.
- 🛣️ **[TanStack Router](https://tanstack.com/router)** — Fully type-safe file-based routing.
- 🏝️ **[TanStack Query](https://tanstack.com/query)** — Async state management with caching.
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework.
- 🧩 **[Radix UI](https://www.radix-ui.com/)** — Accessible, headless UI primitives.
- ✨ **[Shiki](https://shiki.style/)** — Accurate syntax highlighting with the Vesper theme.
- 🔍 **[Biome](https://biomejs.dev/)** — Fast, opinionated linter and formatter.

---

## ✨ Features

- [x] 🪝 Capture webhook requests from any HTTP method
- [x] 🔍 Inspect headers, body, query params and IP in detail
- [x] 📋 One-click copy of the capture URL
- [x] 🤖 AI-powered TypeScript handler generation with Zod
- [x] 🗑️ Delete captured webhooks
- [x] ♾️ Infinite scroll with cursor-based pagination
- [x] 💀 Skeleton screens across all loading states

---

## 🚀 Getting Started

### 📋 Prerequisites

- 🟩 [Node.js 18+](https://nodejs.org/)
- 📦 [pnpm 10.15.0+](https://pnpm.io/)
- 🐳 [Docker](https://www.docker.com/)

### 🔧 Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/joschonarth/webhook-inspector.git
    ```

2. Navigate into the project:

    ```bash
    cd webhook-inspector
    ```

3. Install dependencies across all packages:

    ```bash
    pnpm install
    ```

### 🔑 Environment Variables

Copy the example env file and fill in your values inside the `api/` folder:

```bash
cp .env.example .env
```

### 🤖 Google Gemini API Key

To use the AI handler generation feature, you'll need a free API key from Google AI Studio.

1. Go to **[aistudio.google.com/apikey](https://aistudio.google.com/apikey)**
2. Sign in with your Google account
3. Click **Create API key**
4. Copy the key and add it to your `.env` file:
```env
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

### 🐳 Database

Start the PostgreSQL container from the `api/` folder:

```bash
docker compose up -d
```

Apply the database migrations:

```bash
pnpm run db:migrate
```

Optionally seed the database with 60 simulated Stripe webhook events:

```bash
pnpm run db:seed
```

### ▶️ Running

**API** (from `api/`):

```bash
pnpm run dev
```

- 🌐 API running at **[http://localhost:3333](http://localhost:3333)**.

**Web** (from `web/`):

```bash
pnpm run dev
```

- 🖥️ App running at **[http://localhost:5173](http://localhost:5173)**.

---

## 📖 API Documentation

With the server running, access the interactive docs powered by Scalar:

- 📚 **[http://localhost:3333/docs](http://localhost:3333/docs)**

---

## ⭐ Support

If this project was useful to you, consider leaving a ⭐ on GitHub!

---

<div align="center">

Made with ♥ by **[João Otávio Schonarth](https://github.com/joschonarth)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joschonarth)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joschonarth@gmail.com)

</div>
