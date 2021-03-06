/* global angular */

'use strict'

/* Bibliotecas do Angular */
require('angular')
require('angular-route')

/* Inicializa o app Angular */
angular.module('HackathonApp', [
  'ngRoute'
])

.config(function ($routeProvider) {
  $routeProvider
    .when('/regioes', {
      templateUrl: '/app/partials/regioes.html',
      controller: 'RegioesCtrl',
      controllerAs: 'vm'
    })
    .when('/regioes/:regiao/unidades', {
      templateUrl: '/app/partials/unidades.html',
      controller: 'UnidadesCtrl',
      controllerAs: 'vm'
    })
    .when('/regioes/:regiao/especialidades', {
      templateUrl: '/app/partials/especialidades.html',
      controller: 'EspecialidadesCtrl',
      controllerAs: 'vm'
    })
    .when('/regioes/:regiao/especialidades/:especialidade/relatorio', {
      templateUrl: '/app/partials/relatorio.html',
      controller: 'RelatorioCtrl',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/regioes'
    })
})

/* Carrega os seviços para acesso a dados */
require('./services/regioes')
require('./services/unidades')
require('./services/especialidades')
require('./services/relatorios')

/* Carrega os controllers */
require('./controllers/home')
require('./controllers/regioes')
require('./controllers/unidades')
require('./controllers/especialidades')
require('./controllers/relatorio')
