'use strict'

// Divide Controller
const home = (req, res) => {
    res.render('application/index')
}

const login = (req, res) => {
    res.render('application/login')
}

// Export
module.exports = {
    home,
    login
}