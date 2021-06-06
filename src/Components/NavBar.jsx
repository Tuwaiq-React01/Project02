import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
	return (
		<nav class='navbar navbar-expand-lg navbar-light bg-light'>
			<div class='container-fluid'>
				<NavLink class='navbar-brand' to='/'>
					Movies
				</NavLink>
			</div>
		</nav>
	);
};

export default NavBar;
