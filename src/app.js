require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {CLIENT_ORIGIN} = require('./config');
const helmet = require('helmet');
const { NODE_ENV } = require('./config')
const HouseholdRouter = require('./Households/households-router')
const Recipes = require('./Recipes/recipes-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
    ? 'tiny' : 'comon';

    app.use(morgan(morganOption));
    app.use(helmet());
    app.use(cors({
        origin: CLIENT_ORIGIN
        })
    );

    app.use('/api/Households', householdRouter);
    app.use('/api/Recipes', recipesRouter);

    app.use(function errorHandler(error, req, res, next) {
        let response
        if (NODE_ENV === 'production') {
            reponse = { error: { message: 'server error' } }
        } else {
            console.error(error)
            response = { message: error.message, error }
        }
        res.status(500).json(response)
    })
  

    module.exports = app

    