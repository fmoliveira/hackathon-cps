/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')
var _ = require('lodash')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Definição do controller */
.controller('EspecialidadesCtrl', function (Especialidades, $routeParams, $location) {
  var self = this
  self.regiao = $routeParams.regiao
  self.especialidades = []

  Especialidades.listarEspecialidades().then(function (res) {
    self.especialidades = res.data
  })

  self.confirmar = function () {
    var selec = _.filter(self.especialidades, function (i) {
      return i.selecionado
    })

    selec = _.map(selec, function (i) {
      return i.descricao
    })

    selec = _.join(selec, ',')

    $location.path('/regioes/' + self.regiao + '/especialidades/' + selec + '/relatorio')
  }
})
