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

  /* Inicializa as listas vazias */
  self.regioes = []
  self.unidades = []
  self.especialidades = []

  /* Carrega as listas de regiões e especialidades */
  Regioes.listarRegioes().then(function (res) {
    self.regioes = res.data
  })

  Especialidades.listarEspecialidades().then(function (res) {
    self.especialidades = res.data
  })

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
    var especialidadesSelecionadas = _.filter(self.especialidades, function (i) {
      return i.selecionado
    })
    console.log('Unidades', especialidadesSelecionadas)
  }

  self.mes
  self.ano
  self.dataSelecionada

  self.atualizarData = function(){
    self.dataSelecionada = new Date(self.ano, self.mes)
    console.log("Data: ", self.dataSelecionada)
  }

  var options = {responsive: true}
  var ctx = document.getElementById('myChart').getContext('2d')
  new Chart(ctx).Bar(Unidades.chartUnidade(), options)
})
