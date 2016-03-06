/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')
var Chart = require('chart.js')

/* Biblioteca de utilidades */
var _ = require('lodash')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o controller da tela inicial */
.controller('HomeCtrl', function (Regioes, Especialidades, Unidades) {
  var self = this

  /* Inicializa a lista de unidades como vazia */
  self.unidades = []
  self.regioes = []

  /* Carrega as listas de regiões e especialidades */
  Regioes.listarRegioes().then(function (res) {
    self.regioes = res.data
  })

  self.especialidades = Especialidades.listarEspecialidades()

  self.atualizarUnidade = function () {
    self.unidades = []
    var regioesSelecionadas = _.filter(self.regioes, function (n) {
      return n.selecionado
    })
    angular.forEach(regioesSelecionadas, function (value, key) {
      self.unidades = _.concat(self.unidades, Unidades.listarUnidades(value.descricao))
    })
  }

  self.atualizarEspecialidade = function () {
    var especialidadesSelecionadas = _.filter(self.especialidades, function(i){
      return i.selecionado
    })
    console.log("Unidades", especialidadesSelecionadas)
  }

  var options = {responsive: true}
  var ctx = document.getElementById('myChart').getContext('2d')
  new Chart(ctx).Bar(Unidades.chartUnidade(), options)
})
