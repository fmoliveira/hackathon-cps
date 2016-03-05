/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o serviço para retornar a lista de especialidades médicas */
.factory('Especialidades', function () {
  var service = {}

  /* Dados mock */
  service.listarEspecialidades = function () {
    var model = [
      { id: 1, descricao: 'Clínico Geral' },
      { id: 2, descricao: 'Pediatra' },
      { id: 3, descricao: 'Psicólogo' },
      { id: 4, descricao: 'Ortopedista' },
      { id: 5, descricao: 'Odontologista' }
    ]
    return model
  }

  return service
})
