const multiplyInto20 = function(arr) {
  var numbers = {}

  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    var factorNumber = 0;

    if(20 % currentNumber === 0) {
      factorNumber = 20 / currentNumber;

      if (numbers[factorNumber]) {
        return true;
      } else {
        numbers[currentNumber] = true;
      }
    }
  }

  return false;
};

console.log(multiplyInto20([5, 7, 15, 3, 1]));

console.log(multiplyInto20([5,10, 33, 2, 8]));

// [2, 7, 8, 10, 15]