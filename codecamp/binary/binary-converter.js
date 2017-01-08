function binaryAgent(str) {
    var binaryArr = str.split(/\s/);
    var interpretedStr = '';
    var baseTenValue;

    binaryArr.forEach(function(code) {
        baseTenValue = parseInt(code,2);
        interpretedStr += String.fromCharCode(baseTenValue);
    });

    return interpretedStr;
}
module.exports = binaryAgent;
