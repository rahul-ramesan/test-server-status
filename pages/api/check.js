export default async function handler(req, res) {
	const target = 'https://test-repo.xhost.live';

	try {
		const response = await fetch(target);
		res.status(200).json({
			status: response.ok ? 'UP' : 'DOWN',
			checkedAt: new Date().toISOString()
		});
	} catch (err) {
		res.status(200).json({
			status: 'DOWN',
			checkedAt: new Date().toISOString()
		});
	}
}
