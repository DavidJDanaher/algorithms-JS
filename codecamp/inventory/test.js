const assert = require('../../assert-wrapper.js');
const functions = require('./update-inventory.js');
const sortByItemName = functions.sortByItemName;
const updateInventory = functions.updateInventory;

console.log('Testing . . .');
// Helper tests


(function() {
    var unsortedInventory = new Map();

    unsortedInventory.set("Microphone", 5)
    .set("Dirty Sock", 2)
    .set("Bowling Ball", 21)
    .set("Hair Pin", 1);

    var sortedInventory = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ];

    assert.deepEqual(sortByItemName(unsortedInventory), sortedInventory, 'The 2d array is sorted properly.');
})();

(function() {
    var inventory = [
        [1, "Microphone"]
    ];
    var shipment = [
        [1, "Hair Pin"]
    ];
    var updatedInventory = [
        [1, "Hair Pin"],
        [1, "Microphone"]
    ];

    assert.deepEqual(updateInventory(inventory, shipment), updatedInventory, 'Simple new item case');
})();

(function() {
    var inventory = [
        [1, "Microphone"],
        [1, "Bowling Ball"]
    ];
    var shipment = [
        [1, "Hair Pin"],
        [1, "Dirty Sock"]
    ];
    var updatedInventory = [
        [1, "Bowling Ball"],
        [1, "Dirty Sock"],
        [1, "Hair Pin"],
        [1, "Microphone"]
    ];

    assert.deepEqual(updateInventory(inventory, shipment), updatedInventory, 'Multiple new items case');
})();

// Code camp tests
(function() {
    var currentInventory = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ];
    var newInventory =  [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ];

    assert.equal(updateInventory(currentInventory, newInventory).length, 6, 'Adds the missing items to the array');
})();
