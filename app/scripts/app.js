'use strict';

/**
 * @ngdoc overview
 * @name sketchFabApp
 * @description
 * # sketchFabApp
 *
 * Main module of the application.
 */
angular
  .module('sketchFabApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/gl', {
          templateUrl:'views/webgl.html',
          controller:'Webglctrl',
          controllerAs:'gl'
        })
        .when('/frame',{
          templateUrl:'views/iFrame.html'

        })
        .when('/in',{
           templateUrl:'Builts/index.html'
         })
      .otherwise({
        redirectTo: '/'
      });
  });
