var test = require('./diag.js');
var assert = require('../../assert-wrapper.js');
var numberString = '1-2-3-4-5-6-7-8-';

smallSymmetricMatrix();
largeSymmetricMatrix();
// asymetricVertical();
// asymetricHorizontal();

function smallSymmetricMatrix() {
    assert.equal(numberString +'9-', test([[1,3,6],[2,5,8],[4,7,9]]), 'Simple 3 x 3 matrix');
}

function largeSymmetricMatrix() {
    var alphabet = 'a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-';
    var letterMatrix = [
        ['a','c','f','j','o'],
        ['b','e','i','n','s'],
        ['d','h','m','r','v'],
        ['g','l','q','u','x'],
        ['k','p','t','w','y']
    ];
    assert.equal(alphabet, test(letterMatrix), '5 x 5 matrix');
}

function asymetricVertical() {
    var asymmetricMatrix = [[1,3],[2,5],[4,7],[6,8]];

    assert.equal(numberString, test(asymmetricMatrix), 'Asymmetric 4 x 2 matrix');
}

function asymetricHorizontal() {
    var asymmetricMatrix = [[1,3,5,7],[2,4,6,8]];

    assert.equal(numberString, test(asymmetricMatrix), 'Asymmetric 2 x 4 matrix');
}
