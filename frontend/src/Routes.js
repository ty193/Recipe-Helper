import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Find from './Find';
import Recipes from './Recipes';
import Profile from './Profile';

function Routes() {
	return (
		<div className="pt-5">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/find">
					<Find />
				</Route>
			</Switch>
		</div>
	);
}

export default Routes;
