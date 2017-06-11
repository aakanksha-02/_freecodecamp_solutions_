function palindrome(str) {
  //remove all non-alphanumeric characters and convert it into lowercase
  str = str.replace(/[\W_]+/g, "").toLowerCase();
  //Check for palindrome by reversing it.
  return str === str.split("").reverse().join("");
}

palindrome("eye");

