'use strict';
var expect = require('chai').expect;
var fizzBuzz = require('../js/fizzbuzz');

describe('FizzBuzz', function() {

    it('3 is a Fizz', function() {
        var number = 3;
        var expected = 'Fizz';
        var result = fizzBuzz.fizzBuzz(number);
        expect(result).to.equal(expected);
    });

    it('6 is a Fizz', function() {
        var number = 6;
        var expected = 'Fizz';
        var result = fizzBuzz.fizzBuzz(number);
        expect(result).to.equal(expected);
    });

    it('5 is a Buzz', function() {
        var number = 5;
        var expected = 'Buzz';
        var result = fizzBuzz.fizzBuzz(number);
        expect(result).to.equal(expected);
    });

    it('10 is a Buzz', function() {
        var number = 10;
        var expected = 'Buzz';
        var result = fizzBuzz.fizzBuzz(number);
        expect(result).to.equal(expected);
    });

    it('15 is a FizzBuzz', function() {
        var number = 15;
        var expected = 'FizzBuzz';
        var result = fizzBuzz.fizzBuzz(number);
        expect(result).to.equal(expected);
    });

    it('30 is a FizzBuzz', function() {
        var number = 30;
        var expected = 'FizzBuzz';
        var result = fizzBuzz.fizzBuzz(number);
        expect(result).to.equal(expected);
    });
});