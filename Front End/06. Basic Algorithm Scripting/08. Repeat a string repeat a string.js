
function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num===0)return "";
  if(num<=0)return "";
  return str.concat(repeatStringNumTimes(str, num-1));
}

repeatStringNumTimes("abc", 3);
