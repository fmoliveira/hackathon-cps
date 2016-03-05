'use strict'

const express = require('express')

var router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: "Hello world!" })
})

module.exports = router
