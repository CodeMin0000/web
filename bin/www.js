'use strict'

// Application Setting ( Module )
const application = require('../application')

// Open Port
const port = 3000

application.listen(port, () => {
    console.log(`Application is listening on port ${port}.`)
})