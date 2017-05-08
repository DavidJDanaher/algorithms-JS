'use strict';

var assert = require('assert');
var expectationString = 'Expected';

this.equal = equal;
this.deepEqual = deepEqual;

function equal(actual, expected, testCase) {
    tryAssertion(assert.equal, actual, expected, testCase);
}

function deepEqual(actual, expected, testCase) {
    tryAssertion(assert.deepEqual, actual, expected, testCase);
}

function tryAssertion(assertion, actual, expected, testCase) {
    try {
        assertion(actual, expected, getFailureMsg(actual, expected, testCase));

        printSuccess(testCase);
    } catch (err) {
        console.log(err.message);
    }
}

function getFailureMsg(actual, expected, testCase) {
    return `! Failure: ${testCase} >>> Expected ${expected} but found ${actual}`;
}

function printSuccess(num) {
    console.log(`+ Success: ${num}.`);
}

module.exports = this;
