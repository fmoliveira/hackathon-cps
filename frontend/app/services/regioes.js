/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o serviço para retornar a lista de regiões */
.factory('Regioes', function () {
  var service = {}

  var mock = [
    { id: 1, descricao: 'Norte' },
    { id: 2, descricao: 'Sul' },
    { id: 3, descricao: 'Leste' },
    { id: 4, descricao: 'Oeste' }
  ]

  /* Dados mock */
  service.listarRegioes = function () {
    return mock
  }

  return service
})
