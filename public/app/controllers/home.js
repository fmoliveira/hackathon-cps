/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')
var Chart = require('chart.js')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o controller da tela inicial */
.controller('HomeCtrl', function (Regioes, Especialidades, Unidades) {
  var self = this

  /* Carrega as listas de regiões e especialidades */
  self.regioes = Regioes.listarRegioes()
  self.especialidades = Especialidades.listarEspecialidades()

  /* Inicializa a lista de unidades como vazia */
  self.unidades = []

  /* Carrega as unidades da região selecionada */
  self.carregarUnidades = function (regiao) {
    self.unidades = Unidades.listarUnidades(regiao)
  }

  var data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  }

  var ctx = document.getElementById('myChart').getContext('2d')
  new Chart(ctx).Line(data)
})
