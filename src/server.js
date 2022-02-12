// CRIAR PASTA
// GIT INIT
//GIT ADD .
// YARN INIT -Y
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
// 1 -  yarn add adminjs @adminjs/express express-formidable tslib - INSTALAR BIBLIOTECAS
import express from 'express';

// 2 - CRIAR SERVER

const app = express();

// 3 - CONSTRUIR O ADMINJS (CHAMAR A CLASSE ADMINJS) E CRIAR CONFIGS
const adminJs = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [],
  })

// 4 - CRIAR AS ROTAS
const router =  AdminJSExpress.buildRouter(adminJs);

// 5 - SUBIR O SERVIDOR
app.use(adminJs.options.rootPath, router);
app.listen(5000, () => {
    console.log("AdminJS is under http://localhost:5000/admin");
});

// 6 - yarn add nodemon prettier sucrase
// 7 - CRIAR ARQUIVO NODEMON.JSON NA PASTA RAIZ
// 8 -  yarn add express-session
// 9 -  yarn dev - PARA RODAR O APP
// 10 - yarn add @adminjs/sequelize dotenv postgres pg-hstore sequelize
// 11 - yarn add sequelize-cli
// 12 - na pasta /src npx sequelize-cli init - novas pastar serão criadas
// 13 - criar pasta DATABASE e mover pastas MIGRATIONS e SEEDERS para dentro de DATABASE
// 14 - trocar nome do arquivo json em /SRC/CONFIG para database.js - editar arquivo
// 15 - criar arquivo .env na pasta raiz
// DATABASE.JS


