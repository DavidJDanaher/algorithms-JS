const Assert = require('../../assert-wrapper.js');
const pairwise = require('./pairs.js');

test_twoElements();
test_sixElements_twoPairs();
test_allOnes();
test_fourElements();
test_nullArray();
test_zerosAndOnes();

function test_twoElements() {
    Assert.equal(pairwise([1,2], 3), 1, 'Two elements');
}

function test_sixElements_twoPairs() {
    Assert.equal(pairwise([1,4,2,3,0,5], 7), 11, 'Six elements, two pairs');
}

function test_allOnes() {
    Assert.equal(pairwise([1,1,1], 2), 1, 'Array of all ones');
}

function test_fourElements() {
    Assert.equal(pairwise([1,3,2,4], 4), 1, 'Four elements, one pair');
}

function test_nullArray() {
    Assert.equal(pairwise([], 100), 0, 'Null array');
}

function test_zerosAndOnes() {
    Assert.equal(pairwise([0, 0, 0, 0, 1, 1], 1), 10, 'Zeros and ones');
}
