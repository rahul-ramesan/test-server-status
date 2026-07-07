const https = require('https');
const fs = require('fs');

const target = 'https://test-repo.xhost.live';

https.get(target, (res) => {
	const result = {
		status: res.statusCode === 200 ? 'UP' : 'DOWN',
		checkedAt: new Date().toISOString()
	};
	fs.writeFileSync('status.json', JSON.stringify(result));
}).on('error', () => {
	const result = { status: 'DOWN', checkedAt: new Date().toISOString() };
	fs.writeFileSync('status.json', JSON.stringify(result));
});
