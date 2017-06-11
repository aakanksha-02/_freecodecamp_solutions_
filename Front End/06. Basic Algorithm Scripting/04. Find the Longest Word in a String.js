function findLongestWord(str) {
  var arr = str.split(" ");
  var max = 0;
  arr.forEach(function(word){
    if(max < word.length){
      max = word.length;
    }
  });
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
