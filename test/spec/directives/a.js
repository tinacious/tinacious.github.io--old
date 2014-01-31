'use strict';

describe('Directive: a', function () {

  // load the directive's module
  beforeEach(module('tinaciousApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<a></a>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the a directive');
  }));
});
