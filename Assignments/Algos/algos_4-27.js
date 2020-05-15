/**
 * takes in an array of numbers
 * and a default index of 0
 * returns the sum of all the elements
 */

function rSumArray(arr, i = 0) {
    if (i != arr.length-1){ //base case
      return arr[i];
    }
    return arr[i] + rSumArray(arr, i++);
   
}

console.log(rSumArray([1, 4, 6])); // should log 11
console.log(rSumArray([2, -4, 6])); // should log 4
console.log(rSumArray([2, -4, 6], 1)); // should log 2


/**                                     
 * takes in a number
 * returns the sum of integers from 1
 * up to and including the number
 */

function rSigma(num) {
  if (num == 1){ //base case 
    return num;
  }
  return num + rSigma(num-1);
}

console.log(rSigma(4)); // should log 10 (1 + 2 + 3 + 4)
console.log(rSigma(5)); // should log 15 (1 + 2 + 3 + 4 + 5)



