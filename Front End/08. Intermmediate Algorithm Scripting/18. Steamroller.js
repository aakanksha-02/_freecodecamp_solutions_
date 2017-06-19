function steamrollArray(arr) {
  if (arr.length === 0) {
    return [];
  }
  var newArr = [];

  if (Array.isArray(arr[0])) {
    newArr = steamrollArray(arr[0]);
  }
  else {
    newArr.push(arr[0]);
  }


  for (var i = 1; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      arr[i] = steamrollArray(arr[i]);
    }
    newArr = newArr.concat(arr[i]);
  }
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
