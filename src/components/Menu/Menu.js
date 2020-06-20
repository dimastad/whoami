import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Menu.scss';

const Menu = () => {
	const [isOpen, toggleMenuState] = useState(false);

  const toggleMenu = event => {
		event.preventDefault();
		toggleMenuState(!isOpen);
	};
	
	return (
		<>
			<div
				className="menu-btn"
				onClick={toggleMenu}
			>
				<div className="btn-line" />
				<div className="btn-line" />
				<div className="btn-line" />
			</div>
			{isOpen && 
				<nav className="menu" >
					<ul className="menu__list">
						<li className="menu__list-item">
							<Link to="/">Home</Link>
						</li>
						<li className="menu__list-item">
							<Link to="/about/">About</Link>
						</li>
						<li className="menu__list-item">
							<Link to="/gallery/">Gallery</Link>
						</li>
					</ul>
				</nav>
			}
		</>
	)
};

export default Menu;