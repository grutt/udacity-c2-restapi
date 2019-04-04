import {Sequelize} from 'sequelize-typescript';
var config = require('./config/config.json')

config = config.dev;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": config.username,
  "password": config.password,
  "database": config.database,
  "host":     config.host,

  dialect: 'postgres',
  storage: ':memory:',
  modelPaths: [
    __dirname + '/controllers/v0/feed/models/',
    __dirname + '/controllers/v0/users/models/',
  ]
});
