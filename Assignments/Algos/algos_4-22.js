/**
 * takes in a sorted array of numbers
 * returns the same OR a new array "deduped"
 * 
 * BONUSES:
 * O(n): no nested loops, new array okay
 * In place (no new array)
 * In place and O(n): no nested loops
 * Keep it O(n) even if unsorted
 */

function removeDuplicates(arr) {
  //scan thru array
  //find dupe
  //remove dupe
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 5]));
// should log [1, 2, 3, 4, 5]


/**
 * takes in an array of integers
 * returns either a number or an array
 * 
 * if one number shows up with the highest frequency, return it
 * if all numbers show up the same number of times, return []
 * if multiple numbers have the same frequency, return them in an array
 */

function findAllModes(arr) {
  // your code here
}

console.log(findAllModes([1, 2, 3, 4])); // should log []
console.log(findAllModes([1, 1, 3, 4])); // should log 1
console.log(findAllModes([1, 1, 3, 4, 4])); // should log [1, 4]
