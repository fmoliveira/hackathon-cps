/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Definição do controller */
.controller('EspecialidadesCtrl', function (Especialidades, $routeParams) {
  var self = this
  self.regiao = $routeParams.regiao
  self.especialidades = []

  Especialidades.listarEspecialidades().then(function (res) {
    self.especialidades = res.data
  })
})
