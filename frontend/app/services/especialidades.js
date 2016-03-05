/* global angular */

'use strict'

/* Biblioteca do Angular */
require('angular')

/* Carrega o app Angular */
angular.module('HackathonApp')

/* Define o serviço para retornar a lista de especialidades médicas */
.factory('ListaEspecialidades', function () {
  var model = []

  /* Dados mock */
  model.push({ id: 1, descricao: 'Clínico Geral' })
  model.push({ id: 2, descricao: 'Pediatra' })
  model.push({ id: 3, descricao: 'Psicólogo' })
  model.push({ id: 4, descricao: 'Ortopedista' })
  model.push({ id: 5, descricao: 'Odontologista' })

  return model
})
