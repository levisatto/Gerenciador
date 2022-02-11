import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
// 1 -  yarn add adminjs @adminjs/express express-formidable tslib - INSTALAR BIBLIOTECAS

// 2 - CRIAR SERVER

const app = express();

// 3 - CONSTRUIR O ADMINJS (CHAMAR A CLASSE ADMINJS) E CRIAR CONFIGS
const adminJS = new AdminJS({
    databases = [],
    rootPath: '/admin',
    resources: []
});

// 4 - CRIAR AS ROTAS
const router =  AdminJSExpress.buildRouter(AdminJS);

// 5 - SUBIR O SERVIDOR
app.use(adminJS.options.rootPath, router);
app.listen(5000, () => {
    console.log("AdminJS is under http://localhost:5000/admin");
});

// 6 - yarn add nodemon prettier sucrase
// 7 - CRIAR ARQUIVO NODEMON.JSON NA PASTA RAIZ