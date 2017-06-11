
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var l1 = str.length;
  var l2 = target.length;
  
  return str.substr(l1-l2,l2) === target;
}

confirmEnding("Bastian", "n");
