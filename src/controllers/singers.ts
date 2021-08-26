import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { getTable } from '../dal';

const router = Router();

const singers = getTable('singers');

router.get('/', async (_, res) => {
  res.send(await singers.find({}).toArray());
});

router.get('/:id', async (req, res) => {
  res.send(await singers.findOne({ _id: new ObjectId(req.params.id) }));
});

export default router;
