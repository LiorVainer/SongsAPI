import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { getTable } from '../dal';
import { handlerGuard } from '../middlewares/handlerGuard';
import { validateObjectId } from '../middlewares/pathParamsValidators';

const router = Router();

const songs = getTable('songs');

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
