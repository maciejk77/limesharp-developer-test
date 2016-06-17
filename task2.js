// Make this work (no vowels, lowercase except the first letter):
// reformat("liMeSHArp DeveLoper TEST") => Lmshrp dvlpr tst

var vowels = ["a", "e", "u", "i", "o"];
var text = "liMeSHArp DeveLoper TEST";
var newText = [];

function reformat(text) {

  // Text to lower case
  text = text.toLowerCase();

  // Splitting text to an array of letters
  newText = text.split('');

  // Overwritting first letter in array to upper case
  newText[0] = newText[0].toUpperCase();

  // Dropping vowels in the array of letters
  for(var i=0; i<newText.length; i++) {
    for(var j=0; j<vowels.length; j++) {
      if(newText[i] === vowels[j]) {
        newText.splice(i,1);
      }
    }
  }

  // Joining array of letters into a string
  newText = newText.join('');

  return newText;
}

// Calling a function with a string stored in text variable
reformat(text);




