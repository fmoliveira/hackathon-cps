'use strict'

// Load modules
const mongoose = require('mongoose')

// Connect to the database
const database = process.env.DATABASE || 'mongodb://localhost:27017/saudecampinas'
mongoose.connect(database)

//
var api = require('../lib/saude')
var Saude = require('../models/saude')

/* Realiza a sincronização com a API da prefeitura */
var sincronizarSaude = function () {
  /* Consulta a listagem */
  api.listarAtendimentos().then((data) => {
    for (var i of data) {
      /* Grava cada um dos itens em nosso banco de dados,
       * caso o mesmo ID ainda não exista */
      Saude.update(
        { _id: i.id },
        { $setOnInsert: i },
        { upsert: true }
      ).then((res) => {
        if (res.ok !== 1) throw new Error('Erro ao sincronizar os dados de saúde!')
      })
    }
  })

  Saude.count().exec((err, count) => {
    if (err) throw err
    console.log(count)
  })
}

sincronizarSaude()
