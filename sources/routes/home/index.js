'use strict'

// Application Setting ( Module )
const express = require('express')
const router = express.Router()
const controller = require('./home.ctrl')

// Application View ( Setting )
router.get('/', controller.home)

router.get('/login', controller.login)

// Export
module.exports = router