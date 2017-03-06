var valueMap = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.10,
    'QUARTER': 0.25,
    'ONE': 1.00,
    'FIVE': 5.00,
    'TEN': 10.00,
    'TWENTY': 20.00,
    'FIFTY': 50.00,
    'HUNDRED': 100.00
};

function makePurchase(itemCost, cashPaid, registerContents) {
    var changeDue = parseToTwoDecimals(cashPaid - itemCost);
    var cashOnHand = getCashOnHand(registerContents, changeDue);
    var lastIndex = registerContents.length - 1;

    if (cashPaid < itemCost) {
        return 'Please pay proper amount';
    }

    if (changeDue > cashOnHand) {
        return 'Insufficient Funds';
    }

    if (changeDue === cashOnHand) {
        return registerContents;
    }

    return dispenseChange(changeDue, registerContents, lastIndex, []);
}

function getCashOnHand(registerContents, changeDue) {
    var i;
    var arrayLength = registerContents.length;
    var total = 0;

    for (i = 0; i < arrayLength; i++) {
        if (valueMap[registerContents[i][0]] < changeDue) {
            total += registerContents[i][1];
        }
    }

    return total;
}

function dispenseChange(changeDue, registerContents, lastIndex, change) {
    var denomination;
    var value;
    var i = lastIndex;

    for (i; i >= 0; i--) {
        denomination = registerContents[i];
        value = valueMap[denomination[0]];

        if (value <= changeDue && denomination[1] > 0) {
            changeDue = parseToTwoDecimals(changeDue - value);
            denomination[1] = parseToTwoDecimals(denomination[1] - value);

            if (change.length > 0 && change[change.length - 1][0] === denomination[0]) {
                change[change.length - 1][1] = parseToTwoDecimals(change[change.length - 1][1] + value);
            } else {
                change.push([denomination[0], value]);
                lastIndex = i;
            }

            break;
        }
    }

    if (changeDue > 0) {
        dispenseChange(changeDue, registerContents, lastIndex, change);
    }

    return change;
}

function parseToTwoDecimals(val) {
    return Number.parseFloat(val.toFixed(2));
}

module.exports.makePurchase = makePurchase;
module.exports.dispenseChange = dispenseChange;
