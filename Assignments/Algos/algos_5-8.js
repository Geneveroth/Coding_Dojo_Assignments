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


function quickSort(arr, startIdx = 0, endIdx = arr.length-1) {
    if (startIdx>=endIdx){
        return arr;
    }
    newPivot = arrayPartition(arr, startIdx, endIdx);

    quickSort(arr, startIdx, newPivot-1);
    quickSort(arr, newPivot+1, endIdx);

    return arr;
}
  
  console.log(quickSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]
  