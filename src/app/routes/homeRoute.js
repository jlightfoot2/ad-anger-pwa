import HomePage from '../HomePage.js';

export default {
  path: 'home',
  name: 'home',
  getComponent (nextState, cb) {
    cb(null, HomePage);
  }
};
