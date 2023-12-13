import React from "react";
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Routes,
} from "react-router-dom";

import Catalog from "./catalog";
import Cart from "./cart";
import Home from "./home_page";
import CardPage from "./card_page";

import logo from "./images/logo.png";
import "./css/app_navigation.css";

const AppNavigation = () => (
	<Router>
		<header>
			<img src={logo} className="logo" alt="Logo" />
			<ul className="header_links">
				<li>
					<NavLink exact to="/" className={({ isActive }) => isActive ? "selected" : "not-selected"}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/catalog" className={({ isActive }) => isActive ? "selected" : "not-selected"}>
						Catalog
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/cart" className={({ isActive }) => isActive ? "selected" : "not-selected"}>
						Cart
					</NavLink>
				</li>
			</ul>
			<div></div>
		</header>
		<Routes>
			<Route path="/" Component={Home} />
			<Route path="/catalog" Component={Catalog} />
			<Route path="/cart" element={<Cart />} />

			<Route path="/card/:id" element={<CardPage />} />
		</Routes>
	</Router>
);

export default AppNavigation;
