import { Router } from 'express';
import { getTable } from '../dal';

const router = Router();

const users = getTable('users');

router.get('', async (req, res) => {
  res.send(await users.find({}).toArray());
});

export default router;
