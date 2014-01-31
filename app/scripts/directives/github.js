'use strict';

angular.module('tinaciousApp')
  .directive('github', function () {
    return {
      template: '<div></div>',
      link: function postLink(scope, element, attrs) {
        element.text('this is the github directive');
      }
    };
  });
