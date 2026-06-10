# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository structure

This is a pnpm monorepo with two apps:

- `apps/api` — NestJS REST API (TypeScript), runs on port 3000 by default
- `apps/web` — Vite + TypeScript frontend (no framework, vanilla TS)

## Commands

All commands run from the repo root unless noted otherwise.

### Development
```bash
pnpm dev              # run both apps in parallel (watch mode)
pnpm web:dev          # web only (Vite HMR)
pnpm api:dev          # API only (NestJS watch mode)
```

### Build
```bash
pnpm web:build        # tsc + vite build
pnpm api:build        # nest build → dist/
pnpm api:start        # run production build (node dist/main)
```

### API testing
```bash
pnpm api:test                                        # unit tests (Jest)
pnpm --filter api test:watch                         # watch mode
pnpm --filter api test:e2e                           # e2e tests (supertest)
pnpm --filter api test:cov                           # coverage report
# run a single test file:
pnpm --filter api jest src/app.controller.spec.ts
```

### Lint & format (API only — web has no lint config yet)
```bash
pnpm --filter api lint     # eslint --fix
pnpm --filter api format   # prettier --write
```

## Architecture

### API (`apps/api`)
Standard NestJS module architecture:
- `AppModule` is the root module, wires controllers and providers via decorators.
- Each feature should live in its own module folder with `*.module.ts`, `*.controller.ts`, `*.service.ts`, and `*.spec.ts`.
- Entry point: `src/main.ts` — bootstraps NestJS and listens on `process.env.PORT ?? 3000`.
- ESLint is configured with `typescript-eslint` (type-checked rules) + `eslint-plugin-prettier`. Prettier `endOfLine` is set to `"auto"` to handle cross-platform line endings.

### Web (`apps/web`)
Bare Vite + TypeScript project (no UI framework). Currently a scaffold — the actual application UI is built inside `src/main.ts` via DOM manipulation and `src/counter.ts`.

## Key conventions
- Package manager: **pnpm** (workspace defined in `pnpm-workspace.yaml`). Do not use npm or yarn.
- TypeScript strict mode is on in both apps.
- `@typescript-eslint/no-explicit-any` is disabled in the API; `no-floating-promises` and `no-unsafe-argument` are warnings (not errors).

## Frontend conventions

### Atomic Design
Components are organized following Atomic Design:
- `atoms/` — single-responsibility primitives (Button, Input, Label, Icon…)
- `molecules/` — compositions of atoms that form a small, reusable unit (FormField, SearchBar…)
- `organisms/` — complex, self-contained sections composed of molecules/atoms (Header, PostCard…)
- `templates/` — page layouts wiring organisms together, no business logic
- `pages/` — instantiate templates with real data; one file per route

New components always go into the most specific level that describes them. Never skip levels (e.g., don't put a molecule directly inside a page).

### Tailwind CSS
All styling is done with Tailwind utility classes. Do not write custom CSS unless a design token or animation cannot be expressed with Tailwind utilities.

### Component testing
Every component must have a co-located test file (`ComponentName.test.ts`) covering its essential use: renders correctly with required props, and the primary user interaction (if any) behaves as expected. Tests that only assert the component mounts without crashing are not sufficient.

## Backend conventions

### REST principles
The API must be fully REST-compliant:
- **Resources over actions** — URLs identify resources (`/posts`, `/posts/:id`), never verbs (`/getPosts`, `/createPost`).
- **HTTP methods carry semantics** — `GET` reads, `POST` creates, `PUT`/`PATCH` updates, `DELETE` removes. Never use `POST` for reads or deletes.
- **Correct status codes** — `200 OK`, `201 Created` (with `Location` header), `204 No Content`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `409 Conflict`, `422 Unprocessable Entity`, `500 Internal Server Error`. Never return `200` for errors.
- **Stateless** — no server-side session state. Auth context travels in the request (e.g., Bearer token).
- **Consistent response shape** — success returns the resource; errors return `{ statusCode, message, error }` (NestJS default).
- **Plural nouns for collections** — `/posts` not `/post`.

## Git conventions (both apps)

Use **Conventional Commits** for every commit message:

```
<type>(<scope>): <short summary>

[optional body]
[optional footer]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`

**Scope:** use the app name or module name, e.g. `feat(api)`, `fix(web)`, `test(posts)`.

**Rules:**
- Summary in imperative mood, lowercase, no period at the end.
- Breaking changes must add `!` after the type/scope (`feat(api)!:`) and include a `BREAKING CHANGE:` footer.
- One logical change per commit — do not bundle unrelated changes.
