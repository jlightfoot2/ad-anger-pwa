import Intro from '../Intro.js';

export default {
  path: '/',
  name: 'default',

  getComponent (nextState, cb) {
    cb(null, Intro);
  }
};
