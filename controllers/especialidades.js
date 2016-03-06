'use strict'

const express = require('express')
const _ = require('lodash')

/* Dados de saúde do banco de dados do Saúde Campinas */
const Saude = require('../models/saude')

/* Inicializa o roteamento */
module.exports = express.Router()

/* Consulta a listagem de especialidades médicas */
module.exports.get('/', (req, res) => {
  Saude.distinct('ocupacaoProfissional')
    .exec((err, data) => {
      if (err) res.send(err)

      /* Mapeia os dados para permitir escalabilidade */
      let especialidades = _.map(data, function (i) {
        return { descricao: i }
      })

      /* Retorna lista de especialidades */
      res.json(especialidades)
    })
})
