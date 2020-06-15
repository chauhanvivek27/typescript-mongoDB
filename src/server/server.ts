import express = require('express');
import { enVar } from "../../util";
import { connect } from '../connection';
import { router  } from '../routes';

// Create a new express app instance
const app: express.Application = express();

app.use(express.json());
app.use('/user', router);

app.listen(enVar.PORT, async () => {
    await connect();
    console.log('App is listening on port 8080!');
});

