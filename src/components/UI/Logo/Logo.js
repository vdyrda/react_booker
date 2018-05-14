import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='Logo'>
			<Link to="/"><img src={logo} className="App" alt="logo" /></Link>
		</div>
	);
};

export default Logo;