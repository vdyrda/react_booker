import React from 'react';

import './Halls.css';

const halls = () => {
	const halls = [
		{name: 'Конференс 1'},
		{name: 'Конференс 2'}
	];

	return (
		<div className='Halls'>
			<div className='Hall'>{halls[0].name}</div>
			<div className='Hall'>{halls[1].name}</div>
		</div>
	);
}

export default halls;