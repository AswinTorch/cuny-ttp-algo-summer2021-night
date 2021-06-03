/**
 * @param {string} haystack
* @param {string} needle
* @return {number}
*/

// Function that returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
var strStr = function(haystack, needle) {
// If needle is an empty string, return 0.
   if (needle.length === 0) return 0;
   
// Return the first position of the needle in the haystack
   return haystack.indexOf(needle);
};