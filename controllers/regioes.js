'use strict'

const express = require('express')
const Saude = require('../models/saude')

var router = express.Router()

router.get('/', (req, res) => {
  Saude.distinct('distritoAtendimento').exec((err, regioes) => {
    if (err) res.send(err)

    res.json(regioes)
  })
})

module.exports = router
