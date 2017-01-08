var assert = require('../../assert-wrapper.js');
var test = require('./binary-converter.js');

test1();

function test1() {
    var binaryString = '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111';
    var expectedString = 'Aren\'t bonfires fun!?';

    assert.equal(test(binaryString), expectedString, 1);
}
