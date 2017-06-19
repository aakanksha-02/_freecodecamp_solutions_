function findElement(arr, func) {
  var result;
  arr.forEach(function(element) {
    if (func(element) === true && !result ) {
      result = element;
    }
  });
  return result;  
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

