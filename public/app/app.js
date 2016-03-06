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
    .when('/inicio', {
      templateUrl: '/app/partials/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'vm'
    })
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
    .otherwise({
      redirectTo: '/inicio'
    })
})

/* Carrega os seviços para acesso a dados */
require('./services/regioes')
require('./services/unidades')
require('./services/especialidades')

/* Carrega os controllers */
require('./controllers/home')
require('./controllers/regioes')
