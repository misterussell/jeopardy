import Categories from './collections/cats';
import Session from './models/session';

export default {
  categories: new Categories(),
  session: new Session(),
};
