import express from 'express';
export const router = express.Router();
import { SaveUser } from '../connection/crud';

router.post('/', async (req: express.Request, res: express.Response) => {
  const data = await SaveUser(req.body);
  res.send(`add user successfully in database ${data.insertedId}`);
});

router.get('/', (req: express.Request, res: express.Response) => {
  res.send(`get user called ${req.params.id}`);
});

router.get('/:id', (req: express.Request, res: express.Response) => {
  res.send(`get user called ${req.params.id}`);
});
