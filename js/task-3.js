"use strict";

const findLongestWord = function(string) {
  const words = string.split(" ");
  console.log(words);
  let longest = words[0];
  for (const big of words) {
    if (big.length > longest.length) {
      longest = big;
    }
  }
  return longest;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
