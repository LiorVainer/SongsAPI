import { Router } from 'express';
import { getTable } from '../dal';

const router = Router();

const singers = getTable('singers');

router.get('', async (_, res) => {
  res.send(await singers.find({}).toArray());
});

export default router;
