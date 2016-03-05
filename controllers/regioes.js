'use strict'

const express = require('express')
const Regiao = require('../models/regiao')

var router = express.Router()

router.get('/', (req, res) => {
  Regiao.find((err, jobs) => {
    if (err) res.send(err)

    res.json(jobs)
  })
})

module.exports = router
