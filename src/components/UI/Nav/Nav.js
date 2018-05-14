import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
	return (
		<ul className='Nav'>
			<li><Link to='/admin/halls'>Конференцы</Link></li>
			<li><Link to='/admin/departments'>Отделы</Link></li>
		</ul>
	);
};

export default Nav;