/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length;

    for (let l = 1; l <= Math.floor(n / 2); l++) {
        if (n % l === 0) {
            const sub = s.slice(0, l);
            const repeated = sub.repeat(n / l);
            if (repeated === s) {
                return true;
            }
        }
    }

    return false;
};