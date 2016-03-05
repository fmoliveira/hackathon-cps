/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o controller da tela inicial */
.controller('HomeCtrl', function (ListaRegioes, ListaEspecialidades) {
  var self = this

  /* Carrega as listas de regiões e especialidades */
  self.regioes = ListaRegioes
  self.especialidades = ListaEspecialidades
})
