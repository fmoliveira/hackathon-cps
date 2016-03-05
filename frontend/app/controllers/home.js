/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o controller da tela inicial */
.controller('HomeCtrl', function (ListaRegioes, ListaUnidades) {
  var self = this

  /* Carrega a lista de regiões */
  self.regioes = ListaRegioes

  /* Carrega a lista de unidades */
  self.unidades = ListaUnidades

})
