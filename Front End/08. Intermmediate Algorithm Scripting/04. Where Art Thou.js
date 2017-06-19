function whatIsInAName(collection, source) {
  var arr = [];
  
  arr = collection.filter(function(obj) {
    var passes = true; 
    
    for (var property in source) {
      if (!obj.hasOwnProperty(property) || obj[property] != source[property]  ) {
        passes = false;
      }
    }
      
    return passes;
    
  });
  
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

