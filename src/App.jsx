import React from 'react';


import {
	BrowserRouter as Router,
	Route,
	Switch,
	NavLink,
} from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import AppAppointment from './components/AppAppointment';

function App() {
	return (
		<Router>
			<nav className="container mx-auto my-4 mx-4">
				<ul className="flex flex-col sm:flex-row myBgf04 text-white">
					<li className="hover:bg-green-700 py-1 px-3 ">
						<NavLink
							activeStyle={{
								fontWeight: 'bold'
							}}
							exact={true}
							to="/"
						>
							Inicio
						</NavLink>
					</li>
					<li className="hover:bg-green-700 py-1 px-3">
						<NavLink className="border-b-1 border-white-700"
							activeStyle={{
								fontWeight: 'bold'
							}}
							to="/project"
						>
							Projecto
						</NavLink>
					</li>
					<li className="hover:bg-green-700 py-1 px-3"> Quienes somos</li>
					<li className="hover:bg-green-700 py-1 px-3"> Galeria</li>
					<li className="hover:bg-green-700 py-1 px-3"> Soporte</li>
					<li className="hover:bg-green-700 py-1 px-3"> Contactos</li>
					<li className="hover:bg-green-700 py-1 px-3"> Alianzas</li>
				</ul>
			</nav>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/project">
					<Project />
				</Route>
				<Route path="/appAppointment">
					<AppAppointment/>					
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
