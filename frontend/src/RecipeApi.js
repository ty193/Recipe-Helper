import React, { useState, useEffect } from 'react';
import axios from 'axios';

let ranking = '2';

let igd1 = 'noodles';
let igd2 = 'apples';
let igd3 = 'tomatoes';
let igd4 = 'chicken';
let igd5 = 'buns';
let igd6 = 'pickles';
let igd7 = 'ground beef';
let igd8 = 'grapes';
let igd9 = 'cheese';
let igd10 = 'milk';

const key = 'dc4507f838fb4eada5c16facfcd4bd6a';

const URL =
	process.env.URL ||
	`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${igd1},+${igd2},+${igd3},+${igd4},+${igd5},+${igd6},+${igd7},+${igd8},+${igd9},+${igd10}&ranking=${ranking}&apiKey=${key}`;

function RecipeApi() {
	const [ recipes, setRecipes ] = useState([]);

	// async function getData() {
	// 	let result = await axios.get(URL);
	// 	return result;
	// }
	// setResult(getData());

	useEffect(() => {
		async function getData() {
			let res = await axios.get(URL);
			console.log(res.data);
			setRecipes(res.data);
		}
		getData();
	}, []);

	return (
		<div>
			<h2>Results</h2>
			{recipes.map((recipe) => {
				return (
					<div key={recipe.id}>
						<p>{recipe.title}</p>
					</div>
				);
			})}
		</div>
	);
}

export default RecipeApi;
