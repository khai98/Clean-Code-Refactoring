'use strict';
var expect = require('chai').expect;
var assert = require('chai').assert;
var calculate = require('../calculator');

describe('Calculator', function() {
    const ADDITION = '+';
    const SUBTRACTION = '-';
    const MULTIPLICATION = '*';
    const DIVISION = '/';

    function calculate(firstOperand, secondOperand, operator) {
        switch (operator) {
            case ADDITION:
                return firstOperand + secondOperand;
            case SUBTRACTION:
                return firstOperand - secondOperand;
            case MULTIPLICATION:
                return firstOperand * secondOperand;
            case DIVISION:
                if (secondOperand != 0)
                    return firstOperand / secondOperand;
                else
                    throw "Can not divide by 0";
            default:
                throw "Unsupported operation";
        }
    }