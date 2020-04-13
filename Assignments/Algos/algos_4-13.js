 /**

takes in a string
returns out an object
with characters as keys
and the number of occurrences as values
how to determine if property is in object:
var obj = { someProp: 'some val' }
obj.hasOwnProperty('someProp') returns true */
function freqTable(str) {
    var obj = {};
    for (var i = 0;i<str.length;i++){
        if (obj.hasOwnProperty(str[i])==false){
            obj[str[i]] = 1;
        }
        else{
            obj[str[i]]++;
        }
    }
    return obj;
  }

  console.log(freqTable('abac')); // logs { a: 2, b: 1, c: 1 }
  console.log(freqTable('deffd')); // logs { d: 2, e: 1, f: 2 }


  /**

takes in a string
returns a string
with the "words" reversed
*/

function reverseWordOrder(str) {
var newStr = '';
var sliceCounter = str.length;
for(var i = str.length-1;i>=0; i--){
   if (str[i]==" "){

   newStr+=str.slice(i+1,sliceCounter)+" ";
   sliceCounter = i;
   }
}
newStr += str.slice(0,sliceCounter);
return newStr;
}

console.log(reverseWordOrder('this statement'));
// should log 'statement this'
console.log(reverseWordOrder('This is a test'));
// should log 'test a is This'

// challenge
console.log(reverseWordOrder('This is a test!')):
// would return 'Test a is this!'
console.log(reverseWordOrder('This is, something')):
// would return 'Something, is this'