/**
 * takes in a string and a number
 * returns a new string with the characters
 * rotated to the left by the given number
 * Note: the number can be greater than the string length
 */

function rotateString(str, num) {
    var newStr='';
    var newStrTwo='';
    num = num%str.length
    for (var i=str.length-num; i<=str.length-1; i++){
        newStr+=str[i]; //dunov
    }
    for (var j=0; j<str.length-num; j++){
            newStrTwo+= str[j]; //Boris Go
    }
    return newStr=newStr+newStrTwo
  }
  
  console.log(rotateString('Boris Godunov', 5)); //"vonudoG Boris Go"
  // should log 'dunovBoris Go
  console.log(rotateString('this', 5)); // should log 'sthi'
  /**
   * takes in two strings
   * returns a boolean
   * Is the second string a rotation of the first?
   * See if you can optimize once you get it working.
   */
  
  function isRotation(str1, str2) {
    // your code here
  }
  
  console.log(isRotation('Boris Godunov', 'dunovBoris Go'));
  // should log true
  console.log(isRotation('hello world', 'llo worldHe'));
  // should log false