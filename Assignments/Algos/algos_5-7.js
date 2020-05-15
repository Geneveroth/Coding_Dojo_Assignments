/**
 * takes in an array, a start index, and an end index
 * picks a random pivot index around which values will be partitioned
 * returns an integer: the new "pivot" index
 * the array should be mutated by the function
 */

/**
 * takes in an UNSORTED array
 * returns the SAME array sorted
 * working in place, use yesterday's arrayPartition internally
 * and call the function recursively as needed
 */

// function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
//     var pivotIndex = Math.floor(Math.random()*(endIdx-startIdx+1)+startIdx);
//     var pivot = arr[pivotIndex];
//     var i = startIdx;
//     var j = endIdx;
//     while (i<j){
//         if(arr[i]<pivot){
//             i++;
//         }
//         else{
//             while(i<j){
//                 if (arr[j]>pivot){
//                     j--;
//                 }
//                 else{
//                     var temp = arr[j];
//                     arr[j] = arr[i];
//                     arr[i] = temp;
//                     break;
//                 }
//             }
//         }
//     }
//     return i;
// }

function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
    const pivot=Math.floor(Math.random()*((endIdx+1)-startIdx))+startIdx;
    const pivotVal = arr[pivot]
    while (startIdx<endIdx){
        while (arr[startIdx]<pivotVal && startIdx<endIdx){
            startIdx++;
        } 
        while (arr[endIdx]>pivotVal && startIdx<endIdx){
            endIdx--;
        }
        if (startIdx==endIdx){
            return startIdx;
        }
        var temp = arr[startIdx];
        arr[startIdx] = arr[endIdx];
        arr[endIdx] = temp;
    }
    return startIdx;
}
  
const arr = [1, 5, 8, 4, 2, 6]
console.log(arrayPartition(arr));
console.log(arr); 
  // M;th.random() returns a number from 0 up to but excluding 1
  
  const arr = [1, 5, 8, 4, 2, 6]
  console.log(arrayPartition(arr)); // should log an index between 0 and 5
  console.log(arr); // should be mutated and partitioned around the returned index
  
  // all values should be partitioned around the returned pivot index
  // for example, if your function chooses a pivot of 3,
  // the returned pivot should be 2 (the new pivot index)
  // the array might now be [1, 2, 4, 8, 5, 6]
  // 4 has all smaller values to its left and all greater values to its right

  //set pointer 1 to arr[0],
  //set pointer 2 to arr[arr.length-1]
  //set pivot to random index math.floor(math.random()*arr.length)
  //see if point1<random index
    //if true, move right until you find a value>random index
  //see if point 2>random index
    //if true, move left until you find a value<random index
  //swap 2 pointers and start again
  //once pointer 2 = pointer 1, return index where this happens (new position of random index)