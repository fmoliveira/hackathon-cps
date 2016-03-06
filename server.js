'use strict'

// Load modules
const express = require('express')
const mongoose = require('mongoose')

// App constants
const port = process.env.PORT || 3000
const database = process.env.DATABASE || 'mongodb://localhost:27017/saudecampinas'

// Connect to the database
mongoose.connect(database)

// Initialise app
var app = express()
var router = express.Router()

// Load routes
router.use('/regioes', require('./controllers/regioes'))
router.use('/especialidades', require('./controllers/especialidades'))

// Register all routes under /api
app.use('/api', router)

// Serving Angular app as static content
app.use(express.static(`${__dirname}/public`))

// Start the server
app.listen(port)
console.log('Server listening on port ' + port)
