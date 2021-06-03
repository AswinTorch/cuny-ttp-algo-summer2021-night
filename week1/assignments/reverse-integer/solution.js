/**
 * @param {number} x
 * @return {number}
 */

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the 
// value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 var reverse = function(x) {
    // Uses built in method to take the absolute value of x, cast it as a string, split the chars (digits) into an array,
    // reverses the array in place, joins them into a string, and finally converts back into a number
    let reversedNum = Number(String(Math.abs(x)).split('').reverse().join(''));
    
    // Changes to positive/negative based on initial input
    let finalReversedNum = (x >= 0) ? reversedNum : reversedNum * -1;
    
    // Edge cases
    if (x >= 0 && finalReversedNum > Math.pow(2, 31) - 1) return 0;
    if (x < 0 && finalReversedNum < Math.pow(-2,31)) return 0;
    
    // Finally returns value
    return finalReversedNum;
};