/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')
var _ = require('lodash')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o serviço para retornar a lista de especialidades médicas */
.factory('Especialidades', function ($http, Relatorios) {
  var service = {}

  /* Consulta a lista de especialidades */
  service.listarEspecialidades = function () {
    return $http.get('/api/especialidades')
  }

  service.chartEspecialidades = function (regiao, especialidades) {
    var data = []
    var labels = []
    console.log(especialidades)
    var aRegEsp = Relatorios.atendimentosRegiaoEspecialidades(regiao.descricao, _.join(especialidades, ','))
    return aRegEsp.then(function (n) {
      n.data.forEach(function (i) {
        labels.push(i._id.especialidade)
        data.push(i.qtdeAtendimentos)
      })
      var dataChart = {
        labels: labels,
        datasets: [
          {
            label: 'My First dataset',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: data
          }
        ]
      }

      return dataChart
    })
  }

  return service
})
