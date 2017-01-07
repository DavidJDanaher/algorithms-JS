function steamrollArray(arr) {
    var flatArr = [];

    getNestedElement(arr);

    return flatArr;

    function getNestedElement(arr) {
        arr.forEach(function(el) {
            if (Array.isArray(el)) {
                getNestedElement(el);
            } else {
                flatArr.push(el);
            }
        });
    }
}

module.exports = steamrollArray;
