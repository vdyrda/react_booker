import React from 'react';

const Nav = (props) => {
	return (
		<ul className='Nav'>
			<li onClick={props.onClickHandler('conferences')}>Конференцы</li>
			<li>Отделы</li>
		</ul>
	);
};

export default Nav;