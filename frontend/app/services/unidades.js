/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o serviço para retornar a lista de unidades */
.factory('Unidades', function(){
  var service = {}

  service.listarUnidades = function(){
    var model = [
    {id: 1, nome: 'CENTRO DE REABILITACAO FISICA', endereco: 'Endereço 1', melhorHorario: '12h'},
    {id: 2, nome: 'CENTRO DE SAUDE BOA VISTA', endereco: 'Endereço 2', melhorHorario: '13h'},
    {id: 3, nome: 'CENTRO DE SAUDE BARAO GERALDO', endereco: 'Endereço 3', melhorHorario: '14h'},
    {id: 4, nome: 'CENTRO DE SAUDE BOA ESPERANCA', endereco: 'Endereço 4', melhorHorario: '15h'}
    ]
    return model
  }

  return service
})
