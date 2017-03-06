const test = require('./register.js');
const assert = require('../../assert-wrapper.js');

underpaid();
insufficientFunds();
exactAmount();
unrestrictedCaseWithTwoDenominations();
unrestrictedCaseWithSmallDenominations();
unrestrictedCaseWithAllDenominations();
restrictedCaseWithSmallDenominations();
restrictedCaseWithLargeDenominations();
insufficientFundsDueToDenomination();

function underpaid() {
    var returnString = 'Please pay proper amount';

    assert.equal(test.makePurchase(12.95, 10, []), returnString, 'for under paid');
}

function insufficientFunds() {
    var returnString = 'Insufficient Funds';

    assert.equal(test.makePurchase(15, 300, getRegisterContents('unrestricted')), returnString, 'insufficient funds');
}

function exactAmount() {
    var exactRegisterContents = [['PENNY', 0.04]];

    assert.equal(test.makePurchase(1.00, 1.04, exactRegisterContents), exactRegisterContents, 'exact amount');
}

function unrestrictedCaseWithTwoDenominations() {
    //unrestricted case means that the ideal denominations have sufficient cash on hand
    var changeDue = 12;
    var expectedResult = [['TEN', 10.00], ['ONE', 2.00]];
    var registerContents = getRegisterContents('unrestricted');
    var lastIndex = registerContents.length - 1;

    assert.deepEqual(test.dispenseChange(changeDue, registerContents, lastIndex, []), expectedResult, 'unrestricted change case');
}

function unrestrictedCaseWithSmallDenominations() {
    //unrestricted case means that the ideal denominations have sufficient cash on hand
    var changeDue = 1.42;
    var expectedResult = [['ONE', 1.00], ['QUARTER', 0.25],  ['DIME', 0.10], ['NICKEL', 0.05], ['PENNY', 0.02]];
    var registerContents = getRegisterContents('unrestricted');
    var lastIndex = registerContents.length - 1;

    assert.deepEqual(test.dispenseChange(changeDue, registerContents, lastIndex, []), expectedResult, 'unrestricted small change case');
}

function unrestrictedCaseWithAllDenominations() {
    //unrestricted case means that the ideal denominations have sufficient cash on hand
    var changeDue = 188.69;
    var registerContents = getRegisterContents('unrestricted');
    var lastIndex = registerContents.length - 1;
    var expectedResult = [
        ['HUNDRED', 100.00],
        ['FIFTY', 50.00],
        ['TWENTY', 20.00],
        ['TEN', 10.00],
        ['FIVE', 5.00],
        ['ONE', 3.00],
        ['QUARTER', 0.50],
        ['DIME', 0.10],
        ['NICKEL', 0.05],
        ['PENNY', 0.04]];

    assert.deepEqual(test.dispenseChange(changeDue, registerContents, lastIndex, []), expectedResult, 'unrestricted change case');
}

function restrictedCaseWithSmallDenominations() {
    var changeDue = 3.64;
    var registerContents = getRegisterContents('restricted');
    var lastIndex = registerContents.length - 1;
    var expectedResult = [
        ['QUARTER', 2.00],
        ['DIME', 1.00],
        ['NICKEL', 0.50],
        ['PENNY', 0.14]
    ];

    assert.deepEqual(test.dispenseChange(changeDue, registerContents, lastIndex, []), expectedResult, 'restricted case smaller denominations');
}

function restrictedCaseWithLargeDenominations() {
    var changeDue = 87.50;
    var registerContents = getRegisterContents('restricted');
    var lastIndex = registerContents.length - 1;
    var expectedResult = [
        ['FIFTY', 50.00],
        ['TEN', 30.00],
        ['FIVE', 5.00],
        ['QUARTER', 2.00],
        ['DIME', 0.50]
    ];

    assert.deepEqual(test.dispenseChange(changeDue, registerContents, lastIndex, []), expectedResult, 'restricted larger denominations');
}

function insufficientFundsDueToDenomination() {
    var customRegister = [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 1.00],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]];

        assert.deepEqual(test.makePurchase(19.50, 20.00, customRegister), 'Insufficient Funds', 'denomination limitation case');
}

function getRegisterContents(type) {
    var unrestrictedRegisterContents = [
        ['PENNY', 0.30],
        ['NICKEL', 1.00],
        ['DIME', 1.00],
        ['QUARTER', 2.00],
        ['ONE', 3.00],
        ['FIVE', 5.00],
        ['TEN', 10.00],
        ['TWENTY', 20.00],
        ['FIFTY', 50.00],
        ['HUNDRED', 100.00]
    ];

    var restrictedRegisterContents = [
        ['PENNY', 0.30],
        ['NICKEL', 0.50],
        ['DIME', 1.00],
        ['QUARTER', 2.00],
        ['FIVE', 5.00],
        ['TEN', 30.00],
        ['FIFTY', 50.00],
        ['HUNDRED', 100.00]
    ];

    return type === 'restricted' ? restrictedRegisterContents : unrestrictedRegisterContents;
}
