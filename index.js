const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	let status = 'Unknown';
	let checkedAt = 'Never';

	if (fs.existsSync('status.json')) {
		const data = JSON.parse(fs.readFileSync('status.json'));
		status = data.status;
		checkedAt = data.checkedAt;
	}

	res.send(`
		<h1>Site Status</h1>
		<p>Status: ${status}</p>
		<p>Last checked: ${checkedAt}</p>
	`);
});

app.listen(PORT, () => {
	console.log(`Status page running on port ${PORT}`);
});
