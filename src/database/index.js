import Sequelize from 'sequelize';
import config from './config/database';
// import Model from '../models/xxx';

const models = [];


// Conexão
class Database {
  constructor() {
    this.connection = new Sequelize(config); // Configuraçoes do /config/database.js
    this.init();
    this.associate();
  }

  // Método de inicialização
  init() {

  }
}