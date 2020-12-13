import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Routes from './Routes';
// import RecipeApi from './RecipeApi';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navigation />
				<Routes />
				{/* <RecipeApi /> */}
			</div>
		</BrowserRouter>
	);
}

export default App;
