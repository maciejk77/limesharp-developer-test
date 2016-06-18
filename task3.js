// Make this work (without using any built in functions, only a for loop, 
//return the next binary number in a string or as an array)
// next_binary_number([1,0]) ==> [1,1]
"use strict";

var decimalArray = []; 
var number = 0; 

// Calling a function with an array of binary numbers ( [1,0] )
next_binary_number([1,0]);

// Function to convert binary to decimal, increment and back to binary
function next_binary_number(binArray) {
  var decimal = bin2dec(binArray);
  decimal++;
  var binary = dec2bin(decimal);
  return binary;
}

// Function to convert binary to decimal number
function bin2dec(binArray) {
  // array of letters in reverse order
  var revBinArray = binArray.reverse();
  // loop to calculate num value
  for(var i = 0; i < revBinArray.length; i++) { 
    if(revBinArray[i] === 1 ) { 
      number = number + Math.pow(2,i) 
    } 
  }
  return number;
}

// Function to convert decimal to binary number
function dec2bin(decimalNumber) {
  while(decimalNumber >= 2) {  
    // Getting a remainder of the binary division
    var remainder = decimalNumber % 2;
    // Getting a decimal number
    decimalNumber = (decimalNumber - remainder) / 2;
    // Pushing reminder to the array of 0's and 1's
    decimalArray.push(remainder);
  }
  // Adding a last quotient to the array
  decimalArray.push(decimalNumber);
  // Reversing the order to get the final binary number array
  return decimalArray.reverse();
}