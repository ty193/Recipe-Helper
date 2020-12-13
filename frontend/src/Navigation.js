import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
	return (
		<Navbar expand="lg">
			<Navbar.Brand href="/">Recipe Helper</Navbar.Brand>
			{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<ul className="navbar-nav ml-auto">
						<li className="nav-link">
							<NavLink className="mr-5" id="color" to="/find">
								Find Recipe
							</NavLink>
						</li>
					</ul>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
