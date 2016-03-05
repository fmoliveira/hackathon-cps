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
  var mockChart = {
    labels: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [6, 10, 15, 20, 35, 40, 36, 35, 34, 22, 23, 14, 17, 12]
      },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [9, 15, 14, 5, 23, 34, 41, 29, 23, 33, 34, 21, 25, 18]
      }
    ]
  }

  /* Consulta a lista de unidades */
  service.listarUnidades = function (regiao) {
    return _.filter(mock, function (i) {
      return (i.regiao === regiao)
    })
  }

  service.chartUnidade = function (unidades) {
    return mockChart
  }

  return service
})
