// Make this work (repeat 3 times the contents of an array):
// repeat([1,2,3]) //[1,2,3,1,2,3,1,2,3]

// Calling a function with a string stored in text variable (arr)
repeat(arr);

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



