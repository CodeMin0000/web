'use strict'

// Application Setting ( Module )
const express = require('express')
const application = express()

// App View Setting
application.set('views', './sources/application-views')
application.set('view engine', 'ejs')
application.use(express.static(`${__dirname}/sources/public`)) // Register Middleware

// Routing
const home = require('./sources/routes/home')
application.use('/', home) // Use > Method to Register Middleware

// Export
module.exports = application