'use strict'

// Load modules
const mongoose = require('mongoose')
const _ = require('lodash')

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
    let checagem = _.map(data, (i) => i.id)

    /* Verifica os itens que já existem */
    Saude.find({ _id: { $in: checagem } }).exec((err, res) => {
      if (err) throw err

      /* Mapeia somente os IDs dos existentes */
      let existentes = _.map(res, (i) => i._id)

      /* Remove da lista os que já existem no banco de dados */
      _.remove(data, (i) => {
        return _.indexOf(existentes, i._id) !== -1
      })

      /* Insere todos os itens de uma vez só */
      let bulk = Saude.collection.initializeUnorderedBulkOp({ useLegacyOps: true })
      _.forEach(data, (i) => bulk.insert(i))
      bulk.execute((err, res) => {
        if (err) throw err

        console.log(res)

        Saude.count().exec((err, count) => {
          if (err) throw err
          console.log(count)
        })
      })
    })
  })

  // setTimeout(sincronizarSaude, 500)
}

sincronizarSaude()
