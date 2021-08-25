import { app } from '../app';
import index from '../controllers/index';
import songs from '../controllers/songs';
import singers from '../controllers/singers';
import users from '../controllers/users';

const path = {
  INDEX: '/',
  SONGS: '/songs',
  SINGERS: '/singers',
  USERS: '/users',
};

app.use(path.INDEX, index);
app.use(path.SONGS, songs);
app.use(path.SINGERS, singers);
app.use(path.USERS, users);
