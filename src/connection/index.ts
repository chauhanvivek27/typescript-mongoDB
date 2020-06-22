const MongoClient = require('mongodb').MongoClient;
import { enVar } from '../../util';

const addressDb: string = enVar.DB_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


let mongodb: any;
export const connect = async () => {
  // add async
  console.log('connecting to mongo DB');
  try {
    let client = await MongoClient.connect(addressDb, options);
    // get the collection
    mongodb = client.db('Users').collection('personal');
  } catch (error) {
    console.log('error during connecting to mongo: ');
    console.error(error);
  }
};

export const get = () => {
  return mongodb;
};

export const close = () => {
  mongodb.close();
};
