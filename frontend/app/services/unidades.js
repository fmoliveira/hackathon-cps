/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o serviço para retornar a lista de unidades */
.factory('ListaUnidades', function(){
  var unidades = []

  /* Dados mock */
  unidades.push({id: 1, nome: 'CENTRO DE REABILITACAO FISICA', endereco: 'Endereço 1', melhorHorario: '12h'})
  unidades.push({id: 2, nome: 'CENTRO DE SAUDE BOA VISTA', endereco: 'Endereço 2', melhorHorario: '13h'})
  unidades.push({id: 3, nome: 'CENTRO DE SAUDE BARAO GERALDO', endereco: 'Endereço 3', melhorHorario: '14h'})
  unidades.push({id: 4, nome: 'CENTRO DE SAUDE BOA ESPERANCA', endereco: 'Endereço 4', melhorHorario: '15h'})

  return unidades
})
