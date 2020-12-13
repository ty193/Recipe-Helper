import React, { useState } from 'react';
import './Find.css';
import { Form, Button, Row, Col, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import firebase from 'firebase';

function Find() {
	const [ searchText, setSearchText ] = useState('');
	const [ searchResults, setSearchResults ] = useState([]);
	const [ selectedIngredients, setSelectedIngredients ] = useState([]);
	const [ recipes, setRecipes ] = useState([]);
	const [ recipeData, setRecipeData ] = useState({});

	const submitSearch = async (e) => {
		e.preventDefault();
		try {
			const searchIngredients = firebase.functions().httpsCallable('searchIngredients');
			const result = await searchIngredients({ query: searchText });
			setSearchResults(result.data.results);
		} catch (e) {
			console.log(e);
		}
	};

	const getRecipes = async () => {
		const mappedIngredients = selectedIngredients.map((ingredient) => {
			return ingredient.name;
		});
		const query = mappedIngredients.join(',+');
		console.log(query);
		try {
			const searchRecipes = firebase.functions().httpsCallable('searchRecipes');
			const result = await searchRecipes({ query });
			console.log(result.data);
			setRecipes(result.data);
		} catch (e) {
			console.log(e);
		}
	};

	const recipeInfo = async (id) => {
		try {
			const getRecipeInfo = firebase.functions().httpsCallable('getRecipeInfo');
			const info = await getRecipeInfo({ id });
			console.log(info);
			setRecipeData(info.data);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="container text-center">
			<h1 className="mb-4 font-weight-bold">Find a recipe</h1>
			<hr text-primary className="rounded" />
			{!recipes.length ? (
				// ###########################################################
				<Container className="Search">
					<Row>
						<Col>
							<Container>
								<Row>
									<Col>
										<Form onSubmit={submitSearch}>
											<Form.Group controlId="formBasicEmail">
												{/* <Form.Label>Search Ingredient</Form.Label> */}
												<h2>Search Ingredient</h2>
												<Form.Control
													type="text"
													placeholder="Search Ingredient"
													value={searchText}
													onChange={(e) => {
														setSearchText(e.target.value);
													}}
												/>
												<Form.Text>Search for ingredients you already have at home.</Form.Text>
											</Form.Group>

											<Button className="space" variant="primary" type="submit">
												Search
											</Button>
										</Form>
									</Col>
								</Row>
							</Container>
							<Container>
								<Row>
									<Col>
										<ListGroup>
											{searchResults.map((result) => {
												return (
													<ListGroup.Item key={result.id}>
														<img
															className="image"
															height="100"
															width="150"
															src={`https://spoonacular.com/cdn/ingredients_100x100/${result.image}`}
														/>
														<p className="title">{result.name}</p>
														<Button
															variant="success"
															onClick={() => {
																setSelectedIngredients([
																	...selectedIngredients,
																	result
																]);
															}}
														>
															Add Ingredient
														</Button>
													</ListGroup.Item>
												);
											})}
										</ListGroup>
									</Col>
								</Row>
							</Container>
						</Col>
						{!selectedIngredients.length ? null : (
							<Col>
								<h2>Selected ingredients</h2>
								<Button className="space" onClick={getRecipes}>
									Find Recipes
								</Button>
								<ListGroup>
									{selectedIngredients.map((ingredient, i) => {
										return (
											<ListGroup.Item key={ingredient.id}>
												<img
													className="image"
													height="100"
													width="150"
													src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
												/>
												<p className="title">{ingredient.name}</p>
												<Button
													variant="danger"
													onClick={() => {
														const ingredientCopy = [ ...selectedIngredients ];
														ingredientCopy.splice(i, 1);
														setSelectedIngredients(ingredientCopy);
														// setSelectedIngredients([ ...selectedIngredients, result ]);
													}}
												>
													Remove Ingredient
												</Button>
											</ListGroup.Item>
										);
									})}
								</ListGroup>
							</Col>
						)}
					</Row>
				</Container>
			) : (
				// #################################################################
				<Container>
					<Row>
						<Col>
							<Button
								className="space"
								onClick={() => {
									setRecipes([]);
								}}
							>
								Back to Search
							</Button>
							<ListGroup>
								{recipes.map((recipe, i) => {
									return (
										<ListGroup.Item key={recipe.id}>
											<img className="image" height="100" width="150" src={recipe.image} />
											<p className="title">{recipe.title}</p>
											<Button
												variant="success"
												onClick={() => {
													recipeInfo(recipe.id);
												}}
											>
												View Recipe
											</Button>
										</ListGroup.Item>
									);
								})}
							</ListGroup>
						</Col>
						{!recipeData.id ? null : (
							<Col style={{ textAlign: 'left' }}>
								<div>
									<h2>{recipeData.title}</h2>
									<img className="image" src={recipeData.image} />
									<p className="header">Ready time: {recipeData.readyInMinutes} Minutes</p>
									<p className="header">Summary: </p>
									<div dangerouslySetInnerHTML={{ __html: recipeData.summary }} />
									<p className="ingredients" className="header">
										Ingredients:{' '}
									</p>
									<ul>
										{recipeData.extendedIngredients.map((ingredient, i) => {
											return <li key={ingredient.id}>{ingredient.original}</li>;
										})}
									</ul>
									<p className="header">Instructions: </p>
									<div dangerouslySetInnerHTML={{ __html: recipeData.instructions }} />
								</div>
							</Col>
						)}
					</Row>
				</Container>
			)}
		</div>
	);
}

export default Find;
