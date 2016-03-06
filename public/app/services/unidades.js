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
    { id: 4, regiao: 'Sul', nome: 'CENTRO DE SAUDE BOA ESPERANCA 4', endereco: 'Endereço 4', melhorHorario: '15h' },
    { id: 5, regiao: 'Sul', nome: 'CENTRO DE SAUDE BOA ESPERANCA 5', endereco: 'Endereço 5', melhorHorario: '15h' },
    { id: 6, regiao: 'Leste', nome: 'CENTRO DE SAUDE BARAO GERALDO 6', endereco: 'Endereço 6', melhorHorario: '14h' },
    { id: 7, regiao: 'Leste', nome: 'CENTRO DE SAUDE BARAO GERALDO 7', endereco: 'Endereço 7', melhorHorario: '14h' },
    { id: 8, regiao: 'Leste', nome: 'CENTRO DE SAUDE BARAO GERALDO 8', endereco: 'Endereço 8', melhorHorario: '14h' },
    { id: 9, regiao: 'Oeste', nome: 'CENTRO DE SAUDE BARAO GERALDO 9', endereco: 'Endereço 9', melhorHorario: '14h' },
    { id: 10, regiao: 'Oeste', nome: 'CENTRO DE SAUDE BARAO GERALDO 10', endereco: 'Endereço 10', melhorHorario: '14h' },
    { id: 11, regiao: 'Oeste', nome: 'CENTRO DE SAUDE BARAO GERALDO 11', endereco: 'Endereço 11', melhorHorario: '14h' },
    { id: 12, regiao: 'Oeste', nome: 'CENTRO DE SAUDE BARAO GERALDO 12', endereco: 'Endereço 12', melhorHorario: '14h' },
    { id: 13, regiao: 'Oeste', nome: 'CENTRO DE SAUDE BARAO GERALDO 13', endereco: 'Endereço 13', melhorHorario: '14h' }
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
