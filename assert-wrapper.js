'use strict';

var assert = require('assert');
var expectationString = 'Expected';

this.equal = equal;
this.deepEqual = deepEqual;

function equal(expected, actual) {
    assert.equal(expected, actual, getFailureMsg(expected, actual));
    printSuccess(arguments[2]);
}

function deepEqual(expected, actual) {
    assert.deepEqual(expected, actual, getFailureMsg(expected, actual));
    printSuccess(arguments[2]);
}

function getFailureMsg(expected, actual) {
    return 'Expected ' + expected + ' but found ' + actual;
}

function printSuccess(num) {
    console.log('Test ' + num + ' passed.');
}
module.exports = this;
