import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { getCollection } from '../dal';
import { handlerGuard } from '../middlewares/handlerGuard';
import { validateObjectId } from '../middlewares/validation/general';

const router = Router();

const songs = getCollection('songs');

router.get(
  '/',
  handlerGuard(async (_, res) => {
    const allSongs = await songs.find({}).toArray();
    return res.send(allSongs);
  })
);

router.get(
  '/:id',
  validateObjectId,
  handlerGuard(async (req, res) => {
    const { id } = req.params;
    const song = await songs.findOne({ _id: new ObjectId(id) });

    return res.send(song);
  })
);

export default router;
