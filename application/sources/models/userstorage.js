'use strict'

class userStorage {
    static #users = {
        id: ['asdf'],
        password: ['asdf'],
        name: ['asdf']
    }

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field]
            }
            return newUsers
        }, {})

        return newUsers
    }
}

module.exports = userStorage