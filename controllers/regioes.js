'use strict'

const express = require('express')
const _ = require('lodash')

/* Dados de saúde do banco de dados do Saúde Campinas */
const Saude = require('../models/saude')

/* Inicializa o roteamento */
exports = express.Router()

/* Consulta a listagem de regiões */
exports.get('/', (req, res) => {
  Saude.distinct('distritoAtendimento')
    .exec((err, data) => {
      if (err) res.send(err)

      /* Mapeia os dados para permitir escalabilidade */
      let regioes = _.map(data, function (i) {
        return { descricao: i }
      })

      /* Retorna lista de regiões */
      res.json(regioes)
    })
})

/* Consulta listagem de unidades de saúde por região */
exports.get('/:regiao/unidades', (req, res) => {
  Saude.distinct('localAtendimento', { distritoAtendimento: req.params.regiao })
    .exec((err, data) => {
      if (err) res.send(err)

      /* Mapeia os dados para permitir escalabilidade */
      let unidades = _.map(data, function (i) {
        return { descricao: i }
      })

      /* Retorna lista de unidades de saúde por região */
      res.json(unidades)
    })
})
