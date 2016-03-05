'use strict'

const express = require('express')
const _ = require('lodash')

const Saude = require('../models/saude')

var router = express.Router()

router.get('/', (req, res) => {
  Saude.distinct('distritoAtendimento').exec((err, data) => {
    if (err) res.send(err)

    let regioes = _.map(data, function (i) {
      return { descricao: i }
    })

    res.json(regioes)
  })
})

module.exports = router
