'use strict';

describe('Controller: WebglctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('sketchFabApp'));

  var WebglctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WebglctrlCtrl = $controller('WebglctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WebglctrlCtrl.awesomeThings.length).toBe(3);
  });
});
