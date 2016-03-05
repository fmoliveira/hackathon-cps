'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o serviço para retornar a lista de regiões */
.factory('ListaRegioes', function () {
  var regioes = []

  /* Dados mock */
  regioes.push({ id: 1, descricao: 'Norte' })
  regioes.push({ id: 2, descricao: 'Sul' })
  regioes.push({ id: 3, descricao: 'Leste' })
  regioes.push({ id: 4, descricao: 'Oeste' })

  return regioes
})
