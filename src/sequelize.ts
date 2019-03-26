import {Sequelize} from 'sequelize-typescript';
// import { FeedItem } from './controllers/v0/models'

const sq =  new Sequelize({
  database: 'database_dev',
  dialect: 'postgres',
  username: '',
  password: '',
  storage: ':memory:',
  modelPaths: [__dirname + '/controllers/v0/models']
});

// sq.addModels([]);

export const sequelize = sq;