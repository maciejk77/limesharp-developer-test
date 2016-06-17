// Make this work (without using any built in functions, only a for loop, 
//return the next binary number in a string or as an array)
// next_binary_number([1,0]) ==> [1,1]

var decArr = []; 
var num = 0; 

// Calling a function with an array of binary numbers ( [1,0] )
next_binary_number([1,0]);

// Function to convert binary to decimal, increment and back to binary
function next_binary_number(binArr) {
  var x = bin2dec(binArr);
  x++;
  var y = dec2bin(x);
  return y;
}

// Function to convert binary to decimal number
function bin2dec(binArray) {
  // array of letters in reverse order
  revBinArray = binArray.reverse();
  // loop to calculate num value
  for(var i=0; i<revBinArray.length; i++) { 
    if(revBinArray[i] === 1 ) { 
      num = num + Math.pow(2,i) 
    } 
  }
  return num;
}

// Function to convert decimal to binary number
function dec2bin(decNum) {
  while(decNum >= 2) {  
    // Getting a remainder of the binary division
    remainder = decNum % 2;
    // Getting a decimal number
    decNum = (decNum - remainder) / 2;
    // Pushing reminder to the array of 0's and 1's
    decArr.push(remainder);
  }
  // Adding a last quotient to the array
  decArr.push(decNum);
  // Reversing the order to get the final binary number array
  return decArr.reverse();
}





