'use strict';

describe('Service: servicePhp', function () {

  // load the service's module
  beforeEach(module('sketchFabApp'));

  // instantiate service
  var servicePhp;
  beforeEach(inject(function (_servicePhp_) {
    servicePhp = _servicePhp_;
  }));

  it('should do something', function () {
    expect(!!servicePhp).toBe(true);
  });

});
