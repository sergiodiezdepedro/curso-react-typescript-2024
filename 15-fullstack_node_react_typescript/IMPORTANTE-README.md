# Fullstack PERN (PostgrSQL, Express, React, Node)

Se incluye este proyecto como ejemplo futuro para revisar código. Es una copia del profesor y no es seguro que el proyecto sea funcional.

**Render** es un servicio online para alojar la base de datos PostgreSQL : https://render.com/.

El [ORM](https://chatgpt.com/share/66fd42d4-cd2c-8003-a161-8d725801f7c7) es [Sequelize](https://sequelize.org/).

**TablePlus** es una GUI para manejar bases de datos relacionales: MySQL, PostgreSQL, SQLite y otras.

## Checklist para el despliegue

El proyecto consta de 3 partes:

-  Frontend (React)
-  Backend (Express)
-  Base de datos remota (PostgreSQL)

Las tres deben estar en servidores que permitan conexiones externas. Es decir, han de tner un hosting en la nube.

La base de datos está en Render.

El frontend puede desplegarse en [Netlify](https://www.netlify.com/) o [Vercel](https://vercel.com/), por ejemplo

Las aplicaciones de Node, como el backend de este proyecto en Express, necesitan un hosting especial. Render puede valer.

## Resultado del despliegue

Hay un repositorio en GitHub para `server` y otro para `client`.

El despliegue del server de Express se realizó en Render.

El front se desplegó finalmente en Vercel: https://fullstack-pern-project-frontend.vercel.app/

La app funciona.

El problema es que el plan gratuito de la base de datos en Render la borra transcurrido un mes desde su creación. Por lo que sin base de datos la app desde el front no funcionará.
