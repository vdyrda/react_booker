import React from 'react';

import logo from '../../../assets/images/logo.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='Logo'>
			<img src={logo} className="App" alt="logo" />
		</div>
	);
};

export default Logo;