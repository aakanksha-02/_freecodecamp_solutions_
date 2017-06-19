function dropElements(arr, func) {

  var shifted = arr.slice();
  var i = 0;
  var numOfElems = arr.length;
  
  while (i < numOfElems) {
      if (!func(arr[i])) {
        shifted.shift();
      }
      else{break;}
      i++;
  }
	return shifted;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
