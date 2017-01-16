function printDiagonals(arr) {
    var x;
    var y;

    var numOfColumns = arr[0].length;
    var numOfRows = arr.length;
    var solutionString = '';
    var bottom = numOfRows - 1;

    for (y = 0; y < numOfRows; y++) {
        for (x = 0; x <= y; x++) {
            solutionString += arr[y-x][x] + '-';
            console.log(solutionString);
        }
    }

    for (x = 1; x < numOfColumns; x++) {
        for (y = bottom; y >= x; y--) {
            solutionString += arr[y][x + bottom - y] + '-';
            console.log(solutionString);

        }
    }
    return solutionString;
}

module.exports = printDiagonals;
