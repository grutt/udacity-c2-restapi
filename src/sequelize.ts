import {Sequelize} from 'sequelize-typescript';
// import { FeedItem } from './controllers/v0/models'

const sq =  new Sequelize({
  "username": "udagramdevelopment1",
  "password": "helloworld",
  "database": "udagramdevelopment1",
  "host": "udagramdevelopment1.c79fzt27bzf6.us-east-2.rds.amazonaws.com",

  dialect: 'postgres',
  storage: ':memory:',
  modelPaths: [__dirname + '/controllers/v0/models']
});

// sq.addModels([]);

export const sequelize = sq;