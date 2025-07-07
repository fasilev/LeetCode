/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let number =[]

    for (let num of nums){
        if(num%2 === 0){
            number.unshift(num);

        }else{
            number.push(num)
        }
    }
    return number;
};