'use strict';

angular.module('tinaciousApp')
.directive('a', function () {
  return {
    restrict: 'E',
    link: function postLink(scope, elem, attrs) {
      if(attrs.href.indexOf('#')) {
        elem.attr('target','_blank');
      }
    }
  };
});
