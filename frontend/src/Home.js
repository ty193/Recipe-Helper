import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';

function Home() {
	return (
		<div className="Home">
			<div className="container text-center">
				<h1 className="mb-4 font-weight-bold text-primary">Recipe Helper</h1>
				<p className="lead text-primary">
					<b>The easiest way find recipes using food you already have your fridge or pantry.</b>
				</p>
				<hr className="rounded" />

				<h2 className="step">Step 1</h2>
				<p className="lead">
					<b>
						Click "Search Ingredients" and search for your ingredients one at a time. Find the correct
						ingredient in the list and click "Add Ingredient" to add it to the list that will appear on
						right side of the page.
					</b>
				</p>
				<Button size="lg" href="/find">
					Search Ingredients
				</Button>

				<h2 className="step">Step 2</h2>
				<p className="lead">
					<b>After you have entered all of your ingredients, click "Find Recipes".</b>
				</p>

				<h2 className="step">Step 2</h2>
				<p className="lead">
					<b>Find one you like and enjoy!</b>
					<br />
					(Tip: if you would like to see more options, try adding or removing ingredients from your search.)
				</p>
			</div>
		</div>
	);
}

export default Home;
