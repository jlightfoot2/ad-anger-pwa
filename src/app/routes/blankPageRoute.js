import BlankPage from '../BlankPage.js';
export default  {

	getComponent(nextState,cb){
		console.log('blank page called 1')
		cb(null,BlankPage);
	},
  	getChildRoutes(partialNextState, cb) {
console.log('blank page called 2')
      	cb(null, [
        	require('./introRoute.js'),
      	])

  	}	
}