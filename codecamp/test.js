const assert = require('assert');
const multiple = require('./small-multiple.js');

test1();
test2();
test3();

function test1() {
    console.log('test [5,1]');
    var result = multiple.smallestCommons([5,1]);
    assert.equal(result, 60, 'expected 60 but got ' + result)
    console.log('passed');
}

function test2() {
    console.log('test [1, 13]');
    var result = multiple.smallestCommons([1,13]);
    assert.equal(result, 360360, 'expected 360360 but got ' + result);
    console.log('passed');
}

function test3() {
    console.log('test [23, 18]');
    var result = multiple.smallestCommons([23,18]);
    assert.equal(result, 6056820, 'expected 6056820 but got ' + result);
    console.log('passed');
}
