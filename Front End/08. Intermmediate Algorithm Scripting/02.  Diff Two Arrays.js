function diffArray(arr1, arr2) {
  var concatArr = arr1.concat(arr2);

  function find(value) {
    if (arr1.indexOf(value) === -1 || arr2.indexOf(value) === -1) {
      return value;
    }
  } 

  return concatArr.filter(find);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

