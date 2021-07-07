//imports
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const db = require('./data/config');

//routers
const recipeRouter = require('./routes/recipe-router');
const ingredientsRouter = require('./routes/ingredients-router');

//express instance
const server = express();

//server
server.use(helmet());
server.use(morgan());
server.use(express.json());

server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientsRouter);

server.use('/', (req, res, next) => {
	res.status(200).json({ message: 'Welcome to the MY DOPE ASS INDIAN RECIPE BOOK!!' });
});

module.exports = server;
