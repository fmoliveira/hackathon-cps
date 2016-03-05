'use strict'

const client = require('./client')

/* Limite de itens na paginação */
const LIMITE_PAGINACAO = 100

var lib = {}

lib.listarAtendimentos = function (pagina, qtde) {
  let limit = qtde || LIMITE_PAGINACAO
  let offset = ((pagina || 1) - 1) * limit
  let uri = `/saude?offset=${offset}&limit=${limit}`
  return client.request(uri)
}

module.exports = lib
