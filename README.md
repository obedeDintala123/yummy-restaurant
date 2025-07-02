# 🍽️ Yummy Restaurant

Aplicação web moderna desenvolvida para facilitar **reservas** e **pedidos online** em restaurantes, com uma experiência fluida e amigável para o usuário final.

![Yummy Screenshot](https://user-images.githubusercontent.com/your_screenshot.png) <!-- (adicione um screenshot real se quiser) -->

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
