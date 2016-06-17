// Make this work (repeat 3 times the contents of an array):
// repeat([1,2,3]) //[1,2,3,1,2,3,1,2,3]

// Function repeats elements of the array as many times as is the length of the array

var arr = [1,2,3]; 
var newArr = [];

function repeat(arr) {
  for(var numOfArrs=0; numOfArrs<arr.length; numOfArrs++) {
    for(var numOfEl=0; numOfEl<arr.length; numOfEl++) {
      newArr.push(arr[numOfEl]);
    }
  }
  return newArr;
}

repeat(arr);

