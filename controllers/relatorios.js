'use strict'

const express = require('express')
const _ = require('lodash')

/* Dados de saúde do banco de dados do Saúde Campinas */
const Saude = require('../models/saude')

/* Inicializa o roteamento */
module.exports = express.Router()

/* Relatório de atendimentos por região e especialidade */
module.exports.get('/regiao-especialidade', (req, res) => {
  let filtro = {}

  if (req.query.regiao) {
    filtro.distritoAtendimento = req.query.regiao
  }

  if (req.query.especialidades) {
    filtro.descricaoAtividadeProfissional = { $in: req.query.especialidades.split(',') }
  }

  Saude.aggregate([
    { $match: filtro },
    { $group: { _id: { regiao: "$distritoAtendimento", especialidade: "$descricaoAtividadeProfissional" }, qtdeAtendimentos: { $sum: 1 } } }
  ]).exec((err, data) => {
    if (err) res.send(err)

    /* Retorna a consulta */
    res.json(data)
  })
})
