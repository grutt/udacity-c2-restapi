import express from 'express';
import { sequelize } from './sequelize';
// import {Sequelize} from 'sequelize-typescript';

import { IndexRouter } from './controllers/v0/routes/index.router';
import { FeedItem } from './controllers/v0/models/FeedItem';

import bodyParser from 'body-parser';

(async () => {
  await sequelize;

  const app = express();
  const port = 8080; // default port to listen
  
  app.use(bodyParser.json());

  //VERY BAD
  app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "http://localhost:8100");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  app.use('/api/v0/', IndexRouter)

  // Root URI call
  app.get( "/", async ( req, res ) => {
    res.send( "/api/v0/" );
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();