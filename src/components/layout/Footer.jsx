import React from 'react';
import logo from '../../assets/logo_footer.png';
import '../../sass/main.scss';

const Footer =() => {
	return (
		<footer className='footer footer_about'>
			<img src={logo} className="footer_logo" alt="Kasa Logo" />
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}

export default  Footer;