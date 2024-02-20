// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

]
    }

    console.log(strStr('baseball', 'ball'))
};

//solution 1
var strStr = function(haystack, needle) {
    if (needle==='') { return 0; }
    if (haystack===null || needle===null) { return -1; }
    haystack_loop: for (var i=0; i <= haystack.length - needle.length; i++) {
        // Avoid looping needle if first letter doesn't match
        if (haystack.charAt(i) === needle.charAt(0)) {
            for (var j = 1; j < needle.length; j++) {
                if (haystack.charAt(i + j) !== needle.charAt(j)) {
                    continue haystack_loop;
                }
            }
            return i;
        }
    }
    return -1;

    //solution 2
    var strStr = function(haystack, needle) {
    return haystack.includes(needle) ? haystack.indexOf(needle) : -1;
};
};