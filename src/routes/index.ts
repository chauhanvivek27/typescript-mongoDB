import express, { json } from 'express';
export const router = express.Router();
import { SaveUser, GetAllUser, GetUserByParam } from '../connection/crud';

interface IUser {
  name: string;
  FirstName: string;
  LastName: string;
}

router.post('/', async (req: express.Request, res: express.Response) => {
  const data = await SaveUser(req.body);
  res.send(`add user successfully in database ${data.insertedId}`);
});

router.get('/', async (req: express.Request, res: express.Response) => {
  let result: IUser[] = [];
  const data = await GetAllUser();
  await data.forEach(function(item: any){
    result.push(item);
   });
  res.send(JSON.stringify(result));
});

router.get('/name/:name/:FirstName?', async (req: express.Request, res: express.Response) => {
  let result: IUser[] = [];
  const {name , FirstName } = req.params;
  const data = await GetUserByParam({name: name , FirstName: FirstName });
  await data.forEach(function(item: any){
    result.push(item);
   });
   res.send(JSON.stringify(result));

});
