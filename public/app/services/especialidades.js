/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o serviço para retornar a lista de especialidades médicas */
.factory('Especialidades', function ($http) {
  var service = {}

  /* Consulta a lista de especialidades */
  service.listarEspecialidades = function () {
    return $http.get('/api/especialidades')
  }

  return service
})
