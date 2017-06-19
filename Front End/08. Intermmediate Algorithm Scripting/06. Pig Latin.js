function translatePigLatin(str) {
  var vowelIdx = str.search(/[aeiou]/);

  if (vowelIdx <= 0) return str + "way";
  else return str.substr(vowelIdx) + str.substr(0, vowelIdx) + "ay";
}

translatePigLatin("consonant");

/* another solution
function translatePigLatin(str) {
  str = str.split('');
  var arr = [];
  var x = [];
  var vowels = ['a','e','i','o','u','y'];

  if (vowels.indexOf(str[0]) !== -1) {
    return (str.join('')+'way');
  }

  for (var i = 1; i < (str.length)-1; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      arr = str.slice(0,i);
      x = (str.slice(i,str.length)).concat(arr);
      x.push('ay');
      return x.join('');
    }
  }

}

translatePigLatin("consonant");
*/
