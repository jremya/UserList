'use strict';

/**
 * @ngdoc function
 * @name userApp.service:UserService
 * @description
 * # AccountsData
 * Service of the userApp
 */
 angular.module('userApp').service('User', function($http){

    // Service for handling user details

 	function getUserData() {
        var promise = $http.get('misc/data.json');

    	promise.success(function(data) {
	        return data;
	    });
        return promise;
    };

	return {
		getUserData: getUserData
    };

 });