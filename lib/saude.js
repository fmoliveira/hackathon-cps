'use strict'

const client = require('./client')

/* Limite de itens na paginação */
const LIMITE_PAGINACAO = 100;

var lib = {}

lib.listarAtendimentos = function (pagina) {
  return client.request('/saude?offset=0&limit=10')
}

module.exports = lib
