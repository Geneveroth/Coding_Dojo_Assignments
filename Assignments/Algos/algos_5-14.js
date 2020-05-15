/**
 * takes in an array of integers
 * and a given sum
 * returns an array of ALL the consecutive integers
 * that make the sum
 * BONUS: what if there are zeros in the input array?
 */

function findConsecutiveSums(arr, sum) {
    var newArr=[];
    var newSum=0;
    for(let i = 0; i < arr.length; i++) {
        newSum+=arr[i];
        if(newSum!==sum){
            continue;
        }
        else newArr=arr.slice(0,i+1);
    }
    return newArr;
  }
  
  console.log(findConsecutiveSums([2, 5, 3, 6, 7, 23, 12], 16));
  // should log [
  //   [2, 5, 3, 6],
  //   [3, 6, 7]
  // ]
  
  
  /**
   * takes in an array of integers
   * and an integer
   * returns an array of the "k" most frequent values
   * the input array WON'T NECESSARILY BE IN ORDER
   * the output array NEED NOT BE ORDERED
   * you can assume there's always a valid answer
   */
  function kMostFrequent(arr, k) {
    // your code here
  }
  
  console.log(kMostFrequent([1, 1, 1, 2, 2, 3], 2));
  // should log [1, 2]
  
  console.log(kMostFrequent([0, 0, 0, 2, 2, 3], 1));
  // should log [0]
  
  console.log(kMostFrequent([1, 3, 2, 2, 1, 3], 3));
  // should log [1, 2, 3] in any order