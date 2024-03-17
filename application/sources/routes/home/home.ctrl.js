'use strict'

// Divide Controller
const userStorage = require('../../models/userstorage')

const output = {
    home: (req, res) => {
        res.render('application/index')
    },

    login: (req, res) => {
        res.render('application/login')
    }
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
              password = req.body.password
        
        const users = (userStorage.getUsers('id', 'password'))

        const response = {}

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id)
            if (users.password[idx] === password) {
                response.success = true
                return res.json(response)
            }
        }

        response.success = false
        response.msg = 'Failed'
        return res.json(response)
    }
}

// Export
module.exports = {
    output,
    process
}