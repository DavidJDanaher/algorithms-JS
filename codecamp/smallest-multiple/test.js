const assert = require('../../assert-wrapper.js');
const smallestCommon = require('./small-multiple.js');

test1();
test2();
test3();

function test1() {
    assert.equal(smallestCommon([5,1]), 60, 1)
}

function test2() {
    assert.equal(smallestCommon([1,13]), 360360, 2);
}

function test3() {
    assert.equal(smallestCommon([23,18]), 6056820, 3);
}
