import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { getTable } from '../dal';

const router = Router();

const users = getTable('users');

router.get('', async (req, res) => {
  res.send(await users.find({}).toArray());
});

router.get(':id', async (req, res) => {
  res.send(await users.findOne({ _id: new ObjectId(req.params.id) }));
});

export default router;
