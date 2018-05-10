import React from 'react';

import Hall from './Hall/Hall';

import './Halls.css';

const halls = () => {
	const halls = [
		{name: 'Конференц 1'},
		{name: 'Конференц 2'}
	];

	return (
		<div className='Halls'>
			<Hall name={halls[0].name} />
            <Hall name={halls[1].name} />
		</div>
	);
};

export default halls;