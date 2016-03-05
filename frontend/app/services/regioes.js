/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o serviço para retornar a lista de regiões */
.factory('ListaRegioes', function () {
  var model = []

  /* Dados mock */
  model.push({ id: 1, descricao: 'Norte' })
  model.push({ id: 2, descricao: 'Sul' })
  model.push({ id: 3, descricao: 'Leste' })
  model.push({ id: 4, descricao: 'Oeste' })

  return model
})
