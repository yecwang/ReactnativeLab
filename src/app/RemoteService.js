
var Firebase = require('firebase');


const DATABASE_URL = 'https://tisoulapp.firebaseio.com/Reactnativelab/';

class RemoteService {
	
	// TIP: define static member variable.https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
	static get DATABASE_URL() {
      return DATABASE_URL;
    }


	constructor() {
		
	}

	intializeAuth() {
		var myFirebase = new Firebase('https://tisoulapp.firebaseio.com/');
		myFirebase.set({
  		
			  Reactnativelab: {
			    AuthService: {
			    	user1: { user:'yuhan', pwd: 'yuhan'},
			    	user2: { user:'fei', pwd: 'fei'},
			    }
			  }
			});
	}

   getAuth(cb) {
		var ref = new Firebase(DATABASE_URL + 'AuthService');
		ref.once("value", 
			function(snapshot) {
  				cb (null, snapshot.val());
  				
			}, 
			function (errorObject) {
 				cb(errorObject);
 			}
		);
	}
}

// TIP: export multi, 
//when you us it you should var {RemoteService, DATABASE_URL} = require('./RemoteService');
// name must be same
//module.exports = {RemoteService, DATABASE_URL};
module.exports = RemoteService;
