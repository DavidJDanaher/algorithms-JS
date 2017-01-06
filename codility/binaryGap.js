exports.solution = solution;
// Score: 100

function solution(N) {
    var baseTwo = 2;
    var numberAsBinary = N.toString(baseTwo);
    var binaryLength = numberAsBinary.length;
    var i = 0;
    var currentBinGap = 0;
    var maxBinGap = 0;

    while (i < binaryLength) {
        if (numberAsBinary[i] === '0') {
            currentBinGap++;
        } else {
            if (maxBinGap < currentBinGap) {
                maxBinGap = currentBinGap;
            }
            currentBinGap = 0;
        }

        i++;
    }

    return maxBinGap;
}
