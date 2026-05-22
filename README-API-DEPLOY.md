# Capivara Aventureira - API Node + MariaDB + Docker

## 1) Estrutura de producao

- App/API: Node.js + Express
- Banco: MariaDB
- Admin DB: phpMyAdmin
- Reverse proxy: Traefik (rede externa `traefik`)

## 2) Variaveis de ambiente

Copie `.env.example` para `.env` e ajuste os valores:

- `JWT_SECRET`
- `DB_ROOT_PASSWORD`
- `DB_PASSWORD`
- `DB_USER`
- `DB_NAME`
- `INITDB_CREATE_DATABASE` (default `true`)
- `INITDB_ALTER` (default `true`)

Com o InitDB habilitado, o app:

- cria o banco automaticamente se nao existir
- aplica criacao/atualizacao de tabelas ao iniciar
- executa migracao de `photo_url` para `photo_base64`
- sincroniza seed de acessorios de forma idempotente

## 3) Subir local com Docker Compose

```bash
docker compose up -d --build
```

## 4) Endpoints principais da API

- `GET /api/health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/me` (Bearer token)
- `GET /api/me/state` (Bearer token)
- `PUT /api/me/state` (Bearer token)
- `GET /api/animals` (Bearer token)
- `POST /api/animals` (Bearer token)
- `PUT /api/animals/:id` (Bearer token)
- `DELETE /api/animals/:id` (Bearer token)
- `GET /api/accessories` (Bearer token)
- `POST /api/accessories/:id/purchase` (Bearer token)
- `POST /api/accessories/:id/equip` (Bearer token)
- `POST /api/accessories/unequip/:slot` (Bearer token)
- `POST /api/accessories/unequip-all` (Bearer token)

### Imagens em base64

As imagens dos animais sao persistidas no banco MariaDB na coluna `photo_base64` (LONGTEXT).

Formato esperado no payload:

```json
{
	"photoBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ..."
}
```

Compatibilidade: a API ainda aceita `photoUrl` no payload para migracao, mas converte para `photo_base64`.

## 5) Integracao frontend

O frontend (`app.js`) ja consome a API para:

- autenticar usuario no primeiro login (`register`) e nos proximos (`login`)
- listar e salvar descobertas em `/api/animals`
- comprar/equipar/remover acessorios em `/api/accessories`

Token JWT salvo no navegador:

- `capy_token`

Obs.: alguns elementos de gameplay (XP, sementes, streak) continuam locais por enquanto.

## 6) Publicacao no Portainer

Use o arquivo `docker-compose.yml` no stack.

Dominios configurados com labels Traefik:

- `https://capivara.aporttec.com`
- `https://phpmyadmin.capivara.aporttec.com`

O phpMyAdmin esta configurado para exigir autenticacao manual (sem auto-login).

## 7) Observacao de seguranca

Troque todos os valores default antes de producao.