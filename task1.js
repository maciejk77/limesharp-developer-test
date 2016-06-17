// Make this work (repeat 3 times the contents of an array):
// repeat([1,2,3]) //[1,2,3,1,2,3,1,2,3]

var newArr = [];

// Function repeats array elements as many times as a length of the array
repeat([1,2,3]);

function repeat(arr) {
  for(var j=0; j<arr.length; j++) {
    for(var j=0; j<arr.length; j++) {
      newArr.push(arr[j]);
    }
  }
  return newArr;
}
