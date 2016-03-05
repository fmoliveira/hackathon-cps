'use strict'

require('angular')

var app = angular.module('HackathonApp.Regioes', [])

.factory('ListaRegioes', function () {
  var regioes = []

  /* Dados mock */
  regioes.push({ id: 1, descricao: 'Norte' })
  regioes.push({ id: 2, descricao: 'Sul' })
  regioes.push({ id: 3, descricao: 'Leste' })
  regioes.push({ id: 4, descricao: 'Oeste' })

  return regioes
})
