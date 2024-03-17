'use strict'

// Application Setting ( Module )
const express = require('express')
const application = express()

// App View Setting
application.set('views', './application-views')
application.set('view engine', 'ejs')

// Routing
const home = require('./routes/home')
application.use('/', home) // Use > Method to register middleware

// Export
module.exports = application