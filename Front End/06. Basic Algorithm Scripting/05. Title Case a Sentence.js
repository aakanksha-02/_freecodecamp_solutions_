function titleCase(str) {
  var arr = str.split(" ");
  arr = arr.map(function(word) {
    //Take out the first character of every word.
    //Change it into upper case, 
    //Again, concatenate with the rest of the word converted to lower case using slice().
    return word.charAt(0).toUpperCase().concat(word.slice(1).toLowerCase());
  });
  return arr.join(" ");
}

titleCase("I'm a little tea pot", "");