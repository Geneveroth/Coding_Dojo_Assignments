/**
 * takes in an array of integers
 * returns an array of TWO INDICES
 * the indices should point to the two elements
 * that add up to the given sum
 * assume that there is only one solution
 * numbers can only be used once
 */

function sumTwo(arr, sum) {
  var newArr = []
  for (var i = 0; i < arr.length; i++){
    for (var j = i + 1; j < arr.length; j++){
        if ((arr[i] + arr[j]) === sum) {
            newArr.push(i,j);
        }
      }
  }
  return newArr;
}

console.log(sumTwo([2, 7, 11, 15], 9)); // should log [0, 1]
console.log(sumTwo([2, 7, 11, 15], 13)); 
console.log(sumTwo([2, 7, 11, 15], 99)); 




/**
 * takes in an array of integers
 * returns an ARRAY of OBJECTS
 * with each one having two key/value pairs: the index and the number
 * the array should have ONLY non-consecutive values
 * the first element of the array is NEVER considered non-consecutive
 */

function allNonConsecutive(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length-1; i++){
        if (arr[i+1] !== arr[i] + 1) {
          // var newObj[i]=i;
            //  newObj[n]=arr[i];
          newArr.push({i:i+1, n:arr[i+1]})
          // newArr.push({newObj})
        }        
    }
    return newArr;
}
console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));
// should log [{i: 4, n: 6}, {i: 7, n: 10}] 6 and 10 are the only non-consecutives

console.log(allNonConsecutive([2, 3, 4, 7, 8, 12]));
// should log [{i: 3, n: 7}, {i: 5, n: 12}] 7 and 12 are the only non-consecutives