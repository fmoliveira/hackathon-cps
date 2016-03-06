'use strict'

// Load modules
const insert = require('./insert')
const request = require('superagent')

// API de Saúde
var api = require('../lib/saude')

/* Realiza a sincronização com a API da prefeitura */
var sincronizarSaude = function (pagina) {
  if (!pagina) pagina = 1

  console.log('Sincronizar', pagina)

  /* Consulta a listagem */
  api.listarAtendimentos(pagina).then((data) => {
    data.forEach((i) => {
      request
        .post('http://elastic.fmoliveira.com.br/saude/atendimentos/' + i.id)
        .send(i)
        .end((err, res) => {
          if (err) throw err
        })
    })
  }, (err) => {
    console.error(err)
  })

  setTimeout(() => sincronizarSaude(pagina + 1), 10000)
}

sincronizarSaude()
