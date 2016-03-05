'use strict'

// Load modules
const express = require('express')

// App constants
const port = process.env.PORT || 3000

// Initialise app
var app = express()
var router = express.Router()

// Load routes
router.use('/hello', require('./controllers/hello'))

// Register all routes under /api
app.use('/api', router)

// Serving Angular app as static content
app.use(express.static(`${__dirname}/public`))

// Start the server
app.listen(port)
console.log('Server listening on port ' + port)
