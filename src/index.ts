import express from 'express';

const app = express();
const port = 8080; // default port to listen

// Root URI call
app.get( "/", ( req, res ) => {
    res.send( "Rooooooooot!" );
} );

// Start the Server
app.listen( port, () => {
    console.log( `server running http://localhost:${ port }` );
    console.log( `press CTRL+C to stop server` );
} );
