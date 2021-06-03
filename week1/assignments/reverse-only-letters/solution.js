/**
 * @param {string} s
 * @return {string}
 */

// Given a string s, return the "reversed" string where all characters that are not a letter stay in the same place, 
// and all letters reverse their positions.
 var reverseOnlyLetters = function(s) {
    let onlyLettersArray = [];
    let reversedArray = [];
    
    // Pushes only the letters of the string into an array
    for (let char of s) {
        if (char.match(/[a-z]/i)) onlyLettersArray.push(char);
    }
    
    // Loops through every character of the string
    for (let char of s) {
        // If the character is a letter, then a letter is popped off the end of 
        // the onlyLettersArray and pushed into reversedArray
        if (char.match(/[a-z]/i)) {
            reversedArray.push(onlyLettersArray.pop());
        } // If the character is not a letter, it is pushed into the reversed array
        else { 
            reversedArray.push(char);
        }
    }
    
    // Returns a string version of the final reversed array
    return reversedArray.join('');
};