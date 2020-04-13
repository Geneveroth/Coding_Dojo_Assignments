/**
 * returns a boolean
 * is the word a palindrome?
 * palindromes are spelled the same when characters are reversed
 */

function isPalindrome(str) {
    if(str.length%2==0){
        for(i=0;i<str.length / 2;i++){
            if (str[i] !== str[str.length - i - 1]) {
                return false;
              }
        }
    }
    else{
        for(i=0; i<(str.length-1)/2; i++){
            if (str[i]!==str[str.length - i-1]){
                return false;
            }
        }
    }
    return true;
}
  
  console.log(isPalindrome('mom')); // should log true
  console.log(isPalindrome('Mom')); // should log false
  console.log(isPalindrome('this')); // should log false
  console.log(isPalindrome('mooom')); // should log true
  
  
  /**
   * returns a string
   * should be the longest palindrome in the string
   */
  
     //loop thru the string until a palindrome is found
    //determine if 2 chars next to eachother are a palindrome
        //if true, put 2 chars into a  new string
        //if false, determine if 3 chars are a palindrome etc
    //return new string

  function longestPalindrom(str) {
    var longest = "";
    for (var i = 0; i < str.length; i++) {
      for (var j = i+1; j < str.length; j++) {
        if (str[i] === str[j]){
          var check = "";
          for (var k = i; k <= j; k++) {
            check += str[k];
          }
          if (isPalindrome(check) && check.length > longest.length ) {
            longest = check;
          }
        }
      }
    }
    return longest;
  }
  
  console.log(longestPalindrom('bobe')); // should log 'bob'
  console.log(longestPalindrom('what up, daddy-o?')); // should log 'dad'
  console.log(longestPalindrom('Yikes! my favorite racecar erupted!'));
  // should log 'e racecar e'