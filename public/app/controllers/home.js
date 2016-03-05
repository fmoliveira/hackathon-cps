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

  var options = {responsive: true}
  var ctx = document.getElementById('myChart').getContext('2d')
  var lineChart = new Chart(ctx).Line(Unidades.chartUnidade(), options)
})
