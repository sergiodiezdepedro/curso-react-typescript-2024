## Stack

### [Prisma](https://www.prisma.io/orm).

Es un ORM

Base de datos PostgreSQL en [Render](https://render.com/)

`npx prisma init ` para crear la configuración del ORM. Esto incluye el archivo `schema-prisma`(los modelos de la base de datos) y un archivo `.env` donde hay que incluir la información sensible de la base de datos remota de Render.

`npx prisma migrate dev `. Para añadir los modelos al sistema de migraciones de Prisma.

`npx prisma studio`. Abre en el navegador una GUI para manejar la base de datos.

`npx prisma db seed`. Para cargar registros en la bade de datos remota, a partir de un archivo `seed.ts`.

### ts-node

```bash
npm i -D ts-node
```

## Next.js

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). Hace falta añadir al `package.json` lo siguiente:

```json
 "prisma": {
      "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
   },
```

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

-  [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-  [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
