const fs = require('fs');
fs.readFile('../package.json', 'base64', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data);
});
//raw data: binary data
//buffer => byte array
