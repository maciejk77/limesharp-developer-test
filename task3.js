// Make this work (without using any built in functions, only a for loop, 
//return the next binary number in a string or as an array)

// next_binary_number([1,0]) ==> [1,1]

var binArr = [1,0];
var decArr = []; 
var num = 0; 

var x = bin2dec(binArr);
console.log(x);
x++;
console.log(x);
dec2bin(x);

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
    
    // Gettin a remainder of the binary division
    remainder = decNum % 2;
    // Getting a decimal number
    decNum = (decNum - remainder) / 2;
    // Pushin reminder to the array of 0's and 1's
    decArr.push(remainder);
  }
  // Adding a last quotient to the array
  decArr.push(decNum);
  // Reversing the order to get the final binary number array
  return decArr.reverse();
}





