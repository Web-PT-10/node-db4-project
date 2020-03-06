const db = require('../config');

module.exports = {
	getAllRecipes,
	getShoppingList
};

function getAllRecipes() {
	return db('recipes');
}

function getShoppingList(recipe_id) {
	return db('recipes_ingredients as ri').where({ recipe_id }).join('ingredients as i', 'ri.ingredient_id', 'i.id');
}
