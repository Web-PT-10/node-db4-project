const knex = require('knex');
const knexfile = require('../knexfile');
const environment = process.env.DB_ENVIRONMENT;

module.exports = knex(knexfile.development);
