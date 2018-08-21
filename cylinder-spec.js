'use strict';

var expect = require('chai').expect;
var cylinder = require('../cylinder');

describe('Cylinder', function() {
    it('radius = 0, height = 0, volume = 0', function() {
        var radius = 0;
        var height = 0;
        var expected = 0;

        var result = cylinder.getVolume(radius, height);

        expect(result).to.equal(expected);
    });

    it('radius = 0, height = 0, volume = 0', function() {
        var radius = 1;
        var height = 2;
        var expected = 18.84955592153876;

        var result = cylinder.getVolume(radius, height);

        expect(result).to.equal(expected);
    });
});