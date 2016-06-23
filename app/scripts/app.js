'use strict';

/**
 * @ngdoc overview
 * @name userApp
 * @description
 * # userApp
 *
 * Main module of the application.
 */
angular
  .module('userApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user',{
        templateUrl: 'views/users.html',
        controller: 'UserCtrl',
        resolve: {
          users: function(User){
            return User.getUserData();
          }
        }
      })
      .otherwise({
        redirectTo: '/user'
      });
  });
