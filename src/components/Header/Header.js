import React from 'react'
import Menu from '../Menu/Menu'
import Nav from '../Nav/Nav';
import './Header.scss'

const Header = () => {

	return (
		<header>
			<span>
				whoami
			</span>
			<Nav />
			<Menu />
		</header>
	)
};

export default Header;