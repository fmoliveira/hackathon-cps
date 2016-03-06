/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')
var Chart = require('chart.js')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Definição do controller */
.controller('RelatorioCtrl', function (Especialidades, $routeParams) {
  var self = this
  self.regiao = $routeParams.regiao
  self.especialidade = $routeParams.especialidade

  var reg = { descricao: self.regiao }
  var espec = self.especialidade.split(',')

  var dataChart = Especialidades.chartEspecialidades(reg, espec)
  dataChart.then(function (n) {
    var options = { responsive: true }
    var ctx = document.getElementById('myChart').getContext('2d')
    new Chart(ctx).Bar(n, options)
  })
})
