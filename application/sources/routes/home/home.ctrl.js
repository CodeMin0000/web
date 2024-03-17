'use strict'

const users = {
    id: ['asdf'],
    password: ['asdf']
}

// Divide Controller
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

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id)
            if (users.password[idx] === password) {
                return res.json ({
                    success: true
                })
            }
        }

        return res.json({
            success: false,
            msg: 'Failed'
        })
    }
}

// Export
module.exports = {
    output,
    process
}