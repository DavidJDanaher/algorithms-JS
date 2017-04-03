function updateInventory(currentInventory, shipment) {
    var inventory = new Map();
    var currentValue = 0;

    currentInventory.forEach(function (item) {
        inventory.set(item[1], item[0]);
    });

    shipment.forEach(function (item) {
        if (inventory.has(item[1])) {
            currentValue = inventory.get(item[1]);
            inventory.set(item[1], currentValue + item[0]);
        } else {
            inventory.set(item[1], item[0]);
        }
    });

    return sortByItemName(inventory);
}

function sortByItemName(inventory) {
    var sortedArr = [];

    for (var [item, count] of inventory) {

        if (sortedArr.length === 0) {
            sortedArr.push([count, item]);
        } else {
            for (var i = 0; i < sortedArr.length; i++) {
                if (item < sortedArr[i][1]) {
                    sortedArr.splice(i, 0, [count, item]);
                    break;
                } else if (i === sortedArr.length - 1) {
                    sortedArr.push([count, item]);
                    break;
                }
            }
        }
    }

    return sortedArr;
}

module.exports.updateInventory = updateInventory;
module.exports.sortByItemName = sortByItemName;
