import {Sequelize} from 'sequelize-typescript';
// import { FeedItem } from './controllers/models'

const sq =  new Sequelize({
  database: 'database_dev',
  dialect: 'postgres',
  username: '',
  password: '',
  storage: ':memory:',
  modelPaths: [__dirname + '/controllers/models']
});

export const sequelize = sq;