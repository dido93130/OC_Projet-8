import React from 'react';
import Logo from '../../assets/logo.png'
import Navbar from '../partials/Navbar';
import '../../sass/main.scss';

const Header = () => {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			<Navbar />			
		</header>
	)
}

export default Header;