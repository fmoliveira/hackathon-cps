/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Biblioteca de utilidades */
var _ = require('lodash')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o serviço para retornar a lista de unidades */
.factory('Unidades', function () {
  var service = {}

  /* Dados mock */
  var mock = [
    { id: 1, regiao: 'Norte', nome: 'CENTRO DE REABILITACAO FISICA', endereco: 'Endereço 1', melhorHorario: '12h' },
    { id: 2, regiao: 'Norte', nome: 'CENTRO DE SAUDE BOA VISTA', endereco: 'Endereço 2', melhorHorario: '13h' },
    { id: 3, regiao: 'Leste', nome: 'CENTRO DE SAUDE BARAO GERALDO', endereco: 'Endereço 3', melhorHorario: '14h' },
    { id: 4, regiao: 'Sul', nome: 'CENTRO DE SAUDE BOA ESPERANCA', endereco: 'Endereço 4', melhorHorario: '15h' }
  ]

  /* Consulta a lista de unidades */
  service.listarUnidades = function (regiao) {
    return _.filter(mock, function (i) {
      return (i.regiao === regiao)
    })
  }

  return service
})
