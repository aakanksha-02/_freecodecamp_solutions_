
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var len = str.length;
  if(num<3)
    return str.substr(0,num).concat("...");
  if(num>len || num===len)
    return str;
  if(len>num)
    return str.substr(0,num-3).concat("...");
}

truncate("A-tisket a-tasket A green and yellow basket", 11, "");
