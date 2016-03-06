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
    /* Filtra as regiões selecionadas */
    var filtro = _.filter(self.regioes, function (i) {
      return i.selecionado
    })

    /* Mapeia somente a descrição das regiões selecionadas */
    filtro = _.map(filtro, function (i) {
      return i.descricao
    })

    /* Lista as regiões selecionadas separadas por vírgula */
    filtro = _.join(filtro, ',')

    console.log(filtro)

    /* Lista as unidades de todas as regiões selecionadas */
    Unidades.listarUnidades(filtro).then(function (res) {
      self.unidades = res.data
    })
  }

  self.atualizarEspecialidade = function () {
    var especialidadesSelecionadas = _.filter(self.especialidades, function (i) {
      return i.selecionado
    })
    console.log('Unidades', especialidadesSelecionadas)
  }

  var options = {responsive: true}
  var ctx = document.getElementById('myChart').getContext('2d')
  new Chart(ctx).Bar(Unidades.chartUnidade(), options)
})
