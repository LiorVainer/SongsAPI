import { app } from '../app';
import index from '../controllers/index';
import songs from '../controllers/songs';
import singers from '../controllers/singers';
import users from '../controllers/users';

export const Path = {
  INDEX: '/',
  SONGS: '/songs',
  SINGERS: '/singers',
  USERS: '/users',
};

app.use(Path.INDEX, index);
app.use(Path.SONGS, songs);
app.use(Path.SINGERS, singers);
app.use(Path.USERS, users);
