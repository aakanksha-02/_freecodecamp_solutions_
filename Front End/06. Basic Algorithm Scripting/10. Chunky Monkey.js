
function chunkArrayInGroups(arr, size) {
  var result = [];
  var i=0;
  // Break it up.
  while(i<arr.length){
    result.push(arr.slice(i,i+=size));
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
