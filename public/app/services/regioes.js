/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o serviço para retornar a lista de regiões */
.factory('Regioes', function ($http) {
  var service = {}

  /* Consulta a lista de regiões */
  service.listarRegioes = function () {
    return $http.get('/api/regioes')
  }

  return service
})
