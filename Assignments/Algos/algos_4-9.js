/**
 * takes in an array
 * returns a string connecting all the page
 * ranges with a comma and a space
 */

 //iterate thru index
  // min string var and max string var
  //compare postion 0 to postion 1
    //if consecutive, compare position 1 to position 2
        // keep comparing until non consecutive
  //place consecutive numbers into a new string
    //replace the integers between min and max value with a single -
  //return new string
  // should log '1-3, 5-7, 10-11'

function bookIndex(arr) {
    var string =''
    var newString='';
    var temp=newString[0];
    var stringMin=0;
    var stringMax=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i+1]==arr[i]+1){
            newString += arr[i], arr[i+1];
        }
        for (var j=0; j<newString.length; j++){
            if (newString[j]<temp){
                stringMin = newString[j];
            }
            else{
                stringMax = newString[j];
                }
            string += stringMin+'-'+stringMax
        }
    }
  }
  
  console.log(bookIndex([1, 2, 3, 5, 6, 7, 10, 11]));
  
  console.log(bookIndex([5, 10, 11, 12])); // should log '5, 10-12'
  
  
//   /**
//    * takes in an array and a separator string
//    * returns a string connecting all the array
//    * elements with the given separator
//    */
  
//   function join(arr, separator) {
//     // your code here
//   }
  
//   console.log(join(['a', 'b', 'c'], '|')); // should log 'a|b|c'
//   console.log(join(['a', 'b', 'c'], '? ')); // should log 'a? b? c'
//   console.log(join(['a', 'b', 'c'], ',,')); // should log 'a,,b,,c'