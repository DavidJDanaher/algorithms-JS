'use strict';

var assert = require('assert');
var expectationString = 'Expected';

this.equal = equal;
this.deepEqual = deepEqual;

function equal(actual, expected) {
    assert.equal(actual, expected, getFailureMsg(actual, expected));
    printSuccess(arguments[2]);
}

function deepEqual(actual, expected) {
    assert.deepEqual(actual, expected, getFailureMsg(actual, expected));
    printSuccess(arguments[2]);
}

function getFailureMsg(actual, expected) {
    return 'Expected ' + expected + ' but found ' + actual;
}

function printSuccess(num) {
    console.log('Test ' + num + ' passed.');
}
module.exports = this;
