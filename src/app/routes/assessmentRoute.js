import Assessment from '../Assessment2.js';

export default {
  path: 'assessment',
  getComponent (nextState, cb) {
    cb(null, Assessment);
  }
};
