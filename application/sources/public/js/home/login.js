'use strict'

const id = document.querySelector('.login-form__id')
const password = document.querySelector('.login-form__password')
const loginButton = document.querySelector('.login-form__submit')

loginButton.addEventListener('click', login)

function login() {
    const req = {
        id: id.value,
        password: password.value
    }

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    })
}