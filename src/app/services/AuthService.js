'use strict';

var RemoteService = require('./RemoteService');

class AuthService
{
	login(user, cb)
	{
		/*var remoteService = new RemoteService();

		//TIP: demostrate how to use static member.
		console.log(RemoteService.DATABASE_URL);
		
		remoteService.getAuth((err, userValue)=>  {
			if (err) {
				console.log(err);
				cb(err, {success: false});
			}
			else {
				console.log(userValue);
				var username = user.username;
				var password = user.password;

				// TIP: loop objects. use Object[name], the difference of arrays and objects, arrary[number], object[name] 
				for (var i in userValue) {

					console.log(userValue[i]);
					if (username === userValue[i].user && password === userValue[i].pwd) {
						cb (null, {success: true});
						return;
					}
				}
				
			}

			cb('Unknow error', {success: false});

		});*/

		// for testing
		setTimeout(() => {
			if (user)
			{
				var username = user.username;
				var password = user.password;
			
				if ((username === 'yuhan' && password === 'yuhan')
					|| (username === 'fei' && password === 'fei')
					|| (username === 'y' && password === 'y')
					) {
					cb (null, {success: true});
					return;
				}
			}

			cb('Wrong user', {success: false});

		}, 1000);	
	}
}

module.exports = new AuthService();