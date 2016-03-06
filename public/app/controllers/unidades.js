/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Definição do controller */
.controller('UnidadesCtrl', function (Unidades, $routeParams) {
  var self = this
  self.regiao = $routeParams.regiao
  self.unidades = []

  Unidades.listarUnidades(self.regiao).then(function (res) {
    self.unidades = res.data
  })
})
