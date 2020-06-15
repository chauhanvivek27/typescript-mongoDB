import { get } from '../connection';

//Create a Record in Database
export const SaveUser = async (doc: object) => {
  let dbCollection = await get();
  return dbCollection.insertOne(doc);
};
