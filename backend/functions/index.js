const functions = require('firebase-functions');
const axios = require('axios');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const apiKey = functions.config().recipe.key;

exports.searchRecipes = functions.https.onCall(async (data, context) => {
	try {
		const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${data.query}&ranking=${1}&apiKey=${apiKey}`;
		const results = await axios.get(url);
		return results.data;
	} catch (e) {
		return [];
	}
});

exports.searchIngredients = functions.https.onCall(async (data, context) => {
	try {
		const url = `https://api.spoonacular.com/food/ingredients/search?query=${data.query}&apiKey=${apiKey}`;
		const results = await axios.get(url);
		return results.data;
	} catch (e) {
		return [];
	}
});

exports.getRecipeInfo = functions.https.onCall(async (data, context) => {
	try {
		const url = `https://api.spoonacular.com/recipes/${data.id}/information?includeNutrition=false&apiKey=${apiKey}`;
		const results = await axios.get(url);
		return results.data;
	} catch (e) {
		return {};
	}
});
