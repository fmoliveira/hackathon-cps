/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o serviço para retornar a lista de regiões */
.factory('Relatorios', function ($http) {
  var service = {}

  /* Consulta o relatório de atendimentos por região e especialidades */
  service.atendimentosRegiaoEspecialidades = function (regiao, especialidades) {
    return $http.get('/api/relatorios/regiao-especialidade?regiao=' + regiao + '&especialidades=' + especialidades)
  }

  return service
})
