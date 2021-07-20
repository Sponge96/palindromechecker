function palindrome(str) {
  let lowerCaseReplace = str.toLowerCase().replace(/[\W_]/g, "");
  let reversed = lowerCaseReplace.split("").reverse().join("")
  return lowerCaseReplace === reversed;
}
  
