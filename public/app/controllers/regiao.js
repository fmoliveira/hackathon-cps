/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Definição do controller */
.controller('RegiaoCtrl', function (Regioes) {
  var self = this
  self.regioes = []

  Regioes.listarRegioes().then(function (res) {
    self.regioes = res.data
  })
})
