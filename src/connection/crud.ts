import { get } from '../connection';

//Create a Record in Database
export const SaveUser = async (doc: object) => {
  let dbCollection = await get();
  return dbCollection.insertOne(doc);
};

export const GetAllUser = async () => {
  let dbCollection = await get();
  return dbCollection.find({}, {name: 1});
}

export const GetUserByParam = async (doc: object) => {
  console.log('doc', doc);
  let dbCollection = await get();
  return dbCollection.find({doc});
}
