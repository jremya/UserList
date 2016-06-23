'use strict';

/**
 * @ngdoc function
 * @name userApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the userApp
 */
angular.module('userApp')
  .controller('UserCtrl', function ($scope, users) {

  	$scope.init = function(){
  		$scope.username = '';
  		$scope.userList = users.data;  	
  	};

  });
