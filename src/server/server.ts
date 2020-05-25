import express = require('express');
import dotenv = require("dotenv");
import { ConnectasyncDB, ConnectDB, PromiseDBConnection } from "./../connection/index";
dotenv.config();


const port = process.env.SERVER_PORT;
const addressDb: string| undefined= process.env.DB_ADDRESS;
console.log('port', port, addressDb);



// Create a new express app instance
const app: express.Application = express();

app.get('/', async (req, res) => {    
    res.send(`Database connect to ${ await ConnectasyncDB(addressDb)}`);
    // res.send(`Database connect to ${ await ConnectDB(addressDb)}`);
    // res.send(`Database connect to ${ await PromiseDBConnection(addressDb)}`);
    
});
app.listen(port, async () => {
    console.log('App is listening on port 8080!');
});