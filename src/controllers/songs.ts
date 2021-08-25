import { Router } from 'express';
import { getTable } from '../dal';

const router = Router();

const songs = getTable('songs');

router.get('', async (req, res) => {
  res.send(await songs.find({}).toArray());
});

export default router;
