/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Definição do controller */
.controller('RelatorioCtrl', function (Relatorios, $routeParams) {
  var self = this
  self.regiao = $routeParams.regiao
  self.especialidade = $routeParams.especialidade
  self.dados = []

  Relatorios.atendimentosRegiaoEspecialidades().then(function (res) {
    self.dados = res.data
  })
})
