// Make this work (without using any built in functions, only a for loop, 
//return the next binary number in a string or as an array)

// next_binary_number([1,0]) ==> [1,1]

var binArr = [1,0,0,1,1,0,1,1,1,1];
var decArr = [];
//var decNum = 12; 
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
    el = decNum % 2;
    decNum = (decNum - el) / 2;
    decArr.push(el);
  }
  return decArr.reverse();
}





