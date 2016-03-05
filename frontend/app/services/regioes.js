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
    { descricao: 'Norte' },
    { descricao: 'Sul' },
    { descricao: 'Leste' },
    { descricao: 'Oeste' }
  ]

  /* Dados mock */
  service.listarRegioes = function () {
    return mock
  }

  return service
})
