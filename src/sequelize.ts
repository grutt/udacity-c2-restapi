import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';

const c = config.dev;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": c.username,
  "password": c.password,
  "database": c.database,
  "host":     c.host,

  dialect: 'postgres',
  storage: ':memory:',
  modelPaths: [
    __dirname + '/controllers/v0/feed/models/',
    __dirname + '/controllers/v0/users/models/',
  ]
});
