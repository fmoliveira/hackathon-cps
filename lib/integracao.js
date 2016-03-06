'use strict'

/* Wrapper para a API da prefeitura */
const client = require('./client')

/* Limite de itens na paginação */
const LIMITE_PAGINACAO = 100

/**
 * Consulta a listagem de equipamentos.
 * @param  {Number} pagina Número da página desejada.
 * @param  {Number} qtde   Quantidade de itens por página.
 * @return {Object}        Listagem de atendimentos.
 */
exports.listarAtendimentos = function (pagina, qtde) {
  /* Utiliza o limite de paginação padrão caso não seja especificado */
  let limit = qtde || LIMITE_PAGINACAO

  /* Calcula o offset inicial através do número da página */
  let offset = ((pagina || 1) - 1) * limit

  /* Realiza a requisição */
  let uri = `/saude?offset=${offset}&limit=${limit}`
  return client.request(uri)
}
