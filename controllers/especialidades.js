'use strict'

const express = require('express')
const _ = require('lodash')

const Saude = require('../models/saude')

exports = express.Router()

exports.get('/', (req, res) => {
  Saude.distinct('ocupacaoProfissional')
    .exec((err, data) => {
      if (err) res.send(err)

      let especialidades = _.map(data, function (i) {
        return { descricao: i }
      })

      res.json(especialidades)
    })
})
