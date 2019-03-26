import express from 'express';
import { sequelize } from './sequelize';
// import {Sequelize} from 'sequelize-typescript';

import { FeedItem } from './controllers/models/FeedItem';

(async () => {
  await sequelize;
  
  const app = express();
  const port = 8080; // default port to listen

  // Root URI call
  app.get( "/", async ( req, res ) => {
    const item = await new FeedItem({caption: 'hello'+Math.random()});
    item.save();
      res.send( "WOOOOOT!" );
  } );

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();