import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { getCollection } from '../dal';

const router = Router();

const singers = getCollection('singers');

router.get('/', async (_, res) => {
  res.send(await singers.find({}).toArray());
});

router.get('/:id', async (req, res) => {
  res.send(await singers.findOne({ _id: new ObjectId(req.params.id) }));
});

export default router;
