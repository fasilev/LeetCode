/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);

    if (reversed < -2147483648 || reversed > 2147483647) {
        return 0;
    }

    return reversed;


};