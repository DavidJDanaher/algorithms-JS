const assert = require('assert');
const test = require('./nested-arr.js');

test1();
test2();
test3();
test4();

function test1(){
    console.log('test [1,2]');
    var result = test([1,2]);

    assert.deepEqual(result, [1,2], 'Expected [1,2] but got ' + result);
};

function test2(){
    console.log('test [1, [2, 3]]');
    var result = test([1,[2,3]]);

    assert.deepEqual(result, [1,2,3], 'Expected [1,2,3] but got ' + result);
};

function test3(){
    console.log('test [1, [2, [3, 4]]]');
    var result = test([1,[2,[3,4]]]);

    assert.deepEqual(result, [1,2,3,4], 'Expected [1,2,3,4] but got ' + result);
};

function test4(){
    console.log('test [1, [2, 3],[4, 5, [6, [7, 8]]]]');
    var result = test([1, [2, 3],[4, 5, [6, [7, 8]]]]);

    assert.deepEqual(result, [1,2,3,4,5,6,7,8], 'Expected [1,2,3,4,5,6,7,8] but got ' + result);
};
