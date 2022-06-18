// STRING MATCHING IN AN ARRAY

// Given an array of string words. Return all strings in words which is substring of another word in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

// Examples:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".

// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []

// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// It's guaranteed that words[i] will be unique.

// 1
function match1(words) {
  var output = [];
  var results = 0;
  for (var i = 0; i < words.length; i++) {
    for (var j = i + 1; j < words.length; j++) {
      if (words[i].length < words[j].length) {
        results = -1;
        results = words[j].search(words[i]);
        if (results != -1) {
          output.push(words[i]);
        }
      } else {
        results = -1;
        results = words[i].search(words[j]);
        if (results !== -1) {
          output.push(words[j]);
        }
      }
    }
  }
  return output;
}

// 2
let match2 = (words) =>
  words.filter((word) =>
    words.some(
      // if this word and the other word are different
      (otherWord) => word !== otherWord && otherWord.includes(word) // and it includes the other
    )
  );

// 3
let match3 = (w) =>
  w.filter((w1) => w.some((w2) => w2.includes(w1) && w2 !== w1));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

// The some() method tests whether at least one element in the array passes
// the test implemented by the provided function. It returns true if, in the
// array, it finds an element for which the provided function returns true;
// otherwise it returns false. It doesn't modify the array.
