/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binaryStr = num.toString(2);
    let complementStr = '';

    for (let char of binaryStr) {
        complementStr += (char === '1') ? '0' : '1';
    }

    return parseInt(complementStr, 2);
};