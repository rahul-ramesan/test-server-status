import { useEffect, useState } from 'react';

export default function StatusPage() {
	const [status, setStatus] = useState('Checking...');
	const [checkedAt, setCheckedAt] = useState('');

	useEffect(() => {
		const target = 'https://test-repo.xhost.live';

		fetch(target, { mode: 'no-cors' })
			.then(() => {
				setStatus('UP');
				setCheckedAt(new Date().toLocaleString());
			})
			.catch(() => {
				setStatus('DOWN');
				setCheckedAt(new Date().toLocaleString());
			});
	}, []);

	return (
		<div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 600, margin: '60px auto', padding: '0 20px' }}>
			<h1>Test-Repo Site Status</h1>
			<p>Status: {status}</p>
			<p>Last checked: {checkedAt}</p>
		</div>
	);
}
