require('dotenv/config');
module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  }
}

// 16 - passar os parametros de module para o arquivo .env
// 17 - criar arquivo .env.example e deixar com os parametros vazios