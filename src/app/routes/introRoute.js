import Intro from '../Intro.js';

export default {
  path: 'intro',
  name: 'intro',
  getComponent (nextState, cb) {
    cb(null, Intro);
  }
};
