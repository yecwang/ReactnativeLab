'use strict';

var RemoteService = require('./RemoteService');

class AuthService
{
	login(user, cb)
	{
		var remoteService = new RemoteService();

		//TIP: demostrate how to use static member.
		console.log(RemoteService.DATABASE_URL);
		
		remoteService.getAuth((err, userValue)=>  {
			if (err) {
				console.log(err);
				cb(err, {sucess: false});
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

			cb('Unknow error', {sucess: false});

		});

		/*
		setTimeout(() => {
			if (user)
			{
				var username = user.username;
				var password = user.password;
				
				var remoteService = new RemoteService();
				remoteService.getAuth((err, user)=>  {
					if (err)
						console.log(err);
						return; // TODO: do something here
					}
					else {
						console.log(user);
					}

				});

				if (username === 'yuhan' && password === 'yuhan') ß{
					cb ({success: true});
					return;
				}
			}

			cb({sucess: false});

		}, 2000);	*/	
	}
}

module.exports = new AuthService();