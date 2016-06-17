// Make this work (repeat 3 times the contents of an array):
// repeat([1,2,3]) => [1,2,3,1,2,3,1,2,3]
"use strict";

var newArr = [];

// Function repeats array elements as many times as a length of the array
repeat([1,2,3]);

function repeat(array) {
  for(var i=0; i<array.length; i++) {
    for(var j=0; j<array.length; j++) {
      newArr.push(array[j]);
    }
  }
  return newArr;
}
