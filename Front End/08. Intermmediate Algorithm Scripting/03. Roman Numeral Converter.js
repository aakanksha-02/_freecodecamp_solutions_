function convertToRoman(num) {

  var rom = [ 'M', 'CM', 'DCCC', 'DCC', 'DC', 'D', 'CD', 'CCC', 'CC', 'C', 'XC', 'LXXX', 'LXX', 'LX', 'L', 'XL', 'XXX', 'XX', 'X', 'IX', 'VIII', 'VII', 'VI', 'V', 'IV', 'III', 'II', 'I' ];
  var dec = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  var converted = [];
  var i = 0;

  while (num > 0) {
    if (num >= dec[i] ) {
      num -= dec[i];
      converted.push(rom[i]);
    }
    else {
      i++;
    }
  }

  return converted.join('');

}

convertToRoman(2);
