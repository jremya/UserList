'use strict';

describe('Controller: UserCtrl', function () {

  // load the controller's module
  beforeEach(module('userApp'));

  var UserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserCtrl = $controller('UserCtrl', {
      $scope: scope,
      users: {"data":[{"id":1,"name":"Sean","imageUrl":"../images/sean.png"},{"id":2,"name":"Yaw","imageUrl":"../images/yaw.png"},{"id":3,"name":"Lucy","imageUrl":"../images/lucy.png"},{"id":4,"name":"Eric","imageUrl":"../images/eric.png"},{"id":5,"name":"Rory","imageUrl":"../images/rory.png"},{"id":6,"name":"Hayley","imageUrl":"../images/hayley.png"}],"status":200,"config":{"method":"GET","transformRequest":[null],"transformResponse":[null],"url":"misc/data.json","headers":{"Accept":"application/json, text/plain, */*"}},"statusText":"OK"}
    });
  }));

  it('userList length', function () {
    scope.init();
    expect(scope.userList.length).toBe(6);
  });
});
