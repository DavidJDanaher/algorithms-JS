function pairwise(arr, arg) {
    var indexArr = [];
    var elementIndex;
    var complementIndex;
    var element;

    for (var i = 0; i < arr.length; i++) {
        element = arr[i];
        elementIndex = arr.indexOf(element, i);
        complementIndex = arr.indexOf(arg - element, elementIndex + 1);
        complementIndex = arrayContains(indexArr, complementIndex) ? complementIndex : arr.indexOf(arg - element, complementIndex + 1);

        if (complementIndex !== -1 && arrayContains(indexArr, elementIndex) && arrayContains(indexArr, complementIndex)) {
            indexArr = indexArr.concat([elementIndex, complementIndex]);
        }
    }

    indexArr.push(0);

    return  indexArr.reduce(addAll);
}

function addAll(a, b) {
    return a + b;
}

function arrayContains(arr, element) {
    return arr.indexOf(element) === -1;
}

module.exports = pairwise;
