var OLMPC = angular.module('OLMPC', ['ngRoute']);


OLMPC.config(['$routeProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/content.html',
    controller: 'baseController'
  })
  .when('/mango', {
    templateUrl: 'views/mango.html',
    controller: 'baseController'
  })
  .when('/home', {
    templateUrl: 'views/content.html',
    controller: 'baseController'
  });
}]);
