'use strict'

const express = require('express')

/* Dados de saúde do banco de dados do Saúde Campinas */
const Saude = require('../models/saude')

/* Inicializa o roteamento */
module.exports = express.Router()

/* Relatório de atendimentos por região e especialidade */
module.exports.get('/regiao-especialidade', (req, res) => {
  let filtro = {}

  /* O filtro de região é opcional */
  if (req.query.regiao) {
    filtro.distritoAtendimento = req.query.regiao
  }

  /* O filtro de especialidades é opcional e deve ser combinado em um array */
  if (req.query.especialidades) {
    filtro.descricaoAtividadeProfissional = { $in: req.query.especialidades.split(',') }
  }

  /* Consultar dados agregados */
  Saude.aggregate([
    { $match: filtro },
    { $group: { _id: { regiao: '$distritoAtendimento', especialidade: '$descricaoAtividadeProfissional' }, qtdeAtendimentos: { $sum: 1 } } },
    { $match: { qtdeAtendimentos: { $gt: 0 } } }
  ]).exec((err, data) => {
    if (err) res.send(err)

    /* Retorna a consulta */
    res.json(data)
  })
})
