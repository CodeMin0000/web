'use strict'

// Application Setting ( Module )
const express = require('express')
const router = express.Router()
const controller = require('./home.ctrl')

// Application View ( Setting )
router.get('/', controller.output.home)
router.get('/login', controller.output.login)
router.post('/login', controller.process.login)

// Export
module.exports = router