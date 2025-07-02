# 🍽️ Yummy Restaurant

Aplicação web moderna desenvolvida para facilitar **reservas** e **pedidos online** em restaurantes, com uma experiência fluida e amigável para o usuário final.

![Yummy Screenshot](https://private-user-images.githubusercontent.com/121716336/461361148-34212562-fcc2-4ec9-a95e-a34e69ab9ca9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE0MzQxNjAsIm5iZiI6MTc1MTQzMzg2MCwicGF0aCI6Ii8xMjE3MTYzMzYvNDYxMzYxMTQ4LTM0MjEyNTYyLWZjYzItNGVjOS1hOTVlLWEzNGU2OWFiOWNhOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwMlQwNTI0MjBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MTMzYWVjNGNhMmQ3ZGViNmVhYThkMzExMTFiOWU5N2U3MjhjMDBmZDhmNjE1NDk1NTBkMjAxMjZlZWJiNDgzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.LdPsaAuM61jc1uLc0TT6kBhmx2iRFOKmM8_I12wYYOY) <!-- (adicione um screenshot real se quiser) -->

## ✨ Funcionalidades

- 📆 Reserva de mesas com data e hora
- 🛒 Pedidos personalizados de pratos
- 🔐 Autenticação e registro de usuários
- 🎨 Interface intuitiva e responsiva

## 🧪 Tecnologias Utilizadas

### Frontend
- ⚛️ **Next.js**
- 🔷 **TypeScript**
- 🌬️ **Tailwind CSS**
- 🍪 Cookies para autenticação JWT

### Backend

- ⚡ **Fastify** (API)
- 🔐 **JWT** para autenticação
- 🐘 **PostgreSQL** (via Prisma ORM)

## 🚀 Como Rodar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/obedeDintala123/yummy-restaurant

# 2. Acesse o diretório
cd yummy-restaurant

# 3. Instale as dependências
npm install

# 4. Crie o arquivo .env
cp .env.example .env
# (Preencha as variáveis, como DATABASE_URL e JWT_SECRET)

# 5. Rode as migrações
npx prisma migrate dev

# 6. Inicie o servidor
npm run dev
