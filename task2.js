// Make this work (no vowels, lowercase except the first letter):
// reformat("liMeSHArp DeveLoper TEST") => Lmshrp dvlpr tst
"use strict";

// Calling a function with a string
reformat("liMeSHArp DeveLoper TEST");

function reformat(string) {
  // Capitilizing first letter
  var firstLetter = string[0].toUpperCase();
  // Lower case for the remaining letters
  var strippedString = string.substring(1).toLowerCase();
  // Regex to drop vowels from the string
  var reducedString = strippedString.replace(/[aeiou]/gi, '');
  // String concatenation: first capital letter and remaining letters in smaller case.
  return firstLetter + reducedString;
}
