const assert = require('../../assert-wrapper.js');
const result = require('./nested-arr.js');

test1();
test2();
test3();
test4();

function test1(){
assert.deepEqual(result([1,2]), [1,2], 1);
};

function test2(){
    assert.deepEqual(result([1,[2,3]]), [1,2,3], 2);
};

function test3(){
    assert.deepEqual(result(([1,[2,[3,4]]])), [1,2,3,4], 3);
};

function test4(){
    assert.deepEqual(result([1, [2, 3],[4, 5, [6, [7, 8]]]]), [1,2,3,4,5,6,7,8], 4);
};
