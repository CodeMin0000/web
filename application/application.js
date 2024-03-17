'use strict'

// Application Setting ( Module )
const express = require('express')
const bodyParser = require('body-parser')
const application = express()

// App View Setting
application.set('views', './sources/application-views')
application.set('view engine', 'ejs')
application.use(express.static(`${__dirname}/sources/public`)) // Register Middleware
application.use(bodyParser.json())
application.use(bodyParser.urlencoded({ extended: true }))

// Routing
const home = require('./sources/routes/home')
application.use('/', home) // Use > Method to Register Middleware

// Export
module.exports = application