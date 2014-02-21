'use strict';

angular.module('tinaciousApp')
  .controller('OpenSourceCtrl', function ($scope) {
    $scope.repos = [
      'goalProgress',
      'angular-goalProgress',
      'angular-picturefill',
      'tinaciousFluidVid',
      'salary-hourly-calculator',
      'angular-tip-calc-bill-split',
      'textShrinkGrow',
      'shrinkList',
      'itizens-connected-theme'
    ];
  });
