import {Sequelize} from 'sequelize-typescript';
var config = require('./config/config.json')

// import { FeedItem } from './controllers/v0/models'

config = config.dev;

const sq =  new Sequelize({
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

// sq.addModels([]);

export const sequelize = sq;