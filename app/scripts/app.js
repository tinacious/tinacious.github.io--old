'use strict';

var app = angular.module('tinaciousApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/open-source', {
      templateUrl: 'views/open-source.html',
      controller: 'OpenSourceCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('TemplateCtrl', function ($scope, $location) {
  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1) || '/';
    return page === currentRoute ? 'active' : '';
  };

  $scope.templates = {
    about: 'views/partials/templates.about.html'
  };
});