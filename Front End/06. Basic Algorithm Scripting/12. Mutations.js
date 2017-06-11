function mutation(arr) {
  var first = arr[0].toLowerCase(), 
      second = arr[1].toLowerCase();
  
  return second.split('').every(function(val) {    
    return first.indexOf(val) !== -1;  
  });
}

mutation(["hello", "hey"]);