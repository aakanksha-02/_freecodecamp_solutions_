function largestOfFour(arr) {
  // You can do this!
  var result = [];
  arr.forEach(function(array) {
    //Sort each array in a ascending order
    //And store last element returned by compare function in our temporary stack
    result.push(array.sort(function(a, b) {return a-b;})[3]);
  });
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], "");
