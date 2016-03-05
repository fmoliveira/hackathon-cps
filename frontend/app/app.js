'use strict'

/* Bibliotecas do Angular */
require('angular')
require('angular-route')

/* Módulos de acesso a dados */
require('./services/regioes')

/* Inicializa o app Angular */
var app = angular.module('HackathonApp', [
  'angular-route',
  'HackathonApp.Regioes'
]);
