import { useEffect, useState } from 'react';

export default function StatusPage() {
	const [status, setStatus] = useState('Checking...');
	const [checkedAt, setCheckedAt] = useState('');

	useEffect(() => {
		fetch('/api/check')
			.then((res) => res.json())
			.then((data) => {
				setStatus(data.status);
				setCheckedAt(data.checkedAt);
			});
	}, []);

	return (
		<div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 600, margin: '60px auto', padding: '0 20px' }}>
			<h1>Site Status</h1>
			<p>Status: {status}</p>
			<p>Last checked: {checkedAt}</p>
		</div>
	);
}
