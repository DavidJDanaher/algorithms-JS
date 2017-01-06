// run 'node binaryGapTest' in console

var binaryGap = require('./binaryGap.js');

test(9, 2);
test(257, 7);
test(265, 4);
test(321, 5); //101000001
test(32769, 14); //1000000000000001
test(33793, 9); //1000010000000001


function test(value, expected) {
    var actual = binaryGap.solution(value);
    var result;

    if (actual === expected) {
        result = actual + ' : passed';
    } else {
        result = 'expected: ' + expected + ', actual: ' + actual;
    }

    console.log('For ' + value + ', ' + result);
}
