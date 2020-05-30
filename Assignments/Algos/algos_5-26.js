/**
 * takes in an array
 * returns THE SAME array ie. WORKING IN PLACE
 * remove every element from the 0 index forward
 * until the callback invoked against the element returns true
 * if it never returns true, the returned mutated array should be empty
 */

function dropIt(arr, callback) {
   for( let i=0; i<arr.length; i++){
    const num=arr[i];
        if(!callback(num)){
           continue;
        }
        else arr.splice(0, i);
            break; 
        if(i==arr.length-1 && !callback(num)){
            return [];
        }   
    }
    return arr;
  }
  
  const isEven = num => num % 2 === 0
  
  const firstArr = [1, 3, 5, 7, 2, 4, 6];
  const firstResult = dropIt(firstArr, isEven);
  
  console.log(firstResult); // should log [2, 4, 6]
  console.log(firstArr === firstResult); // should log true
  
  const secondArr = [1, 3, 5, 7, 9];
  const secondResult = dropIt(secondArr, isEven);
  
  console.log(secondResult); // should log []
  console.log(secondArr === secondResult); // should log true
  
  
  /**
   * @param {string} str the original string
   * @return {boolean}
   * Can the string characters be rearranged to make a palindrome?
   * palindrome: a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nursesrun.
   */
  
  function couldBePalindrome(str) {
    // your code here
  }
  
  console.log(couldBePalindrome('PPo'));
  // should log true - could be 'PoP'
  
  console.log(couldBePalindrome('oooPP'));
  // should log true - could be 'PoooP'
  
  console.log(couldBePalindrome('Yuuyuu'));
  // should log false