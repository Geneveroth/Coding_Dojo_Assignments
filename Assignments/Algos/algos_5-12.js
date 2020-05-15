/**
 * takes in two SORTED arrays
 * returns a new SORTED array
 * with the elements shared by both
 * BONUS: dedupe
 */

//  //function intersectSortedArrays(arr1, arr2) {
//     var newArr = [];
//     tracker1 = 0;
//     tracker2 = 0;
//     while(tracker1<arr1.length && tracker2<arr2.length){
//         if (arr1[tracker1]<arr2[tracker2]){
//             newArr.push(arr1[tracker1]);
//             tracker1++;
//         }
//         else if (arr1[tracker1]>arr2[tracker2]){
//             newArr.push(arr2[tracker2]);
//             tracker2++;
//         }
//         else {
//             newArr.push(arr1[tracker1]);
//             tracker1++;
//             tracker2++;
//         }
//     }
//     while(tracker1<arr1.length){
//       newArr.push(arr1[tracker1]);
//       tracker1++;
//     }
//     while(tracker2<arr2.length){
//       newArr.push(arr2[tracker2]);
//       tracker2++;
//     }
//     return newArr;
//   }

//   console.log(intersectSortedArrays([1, 2, 2], [2, 3, 3]));
//   // should log [1, 2, 2, 3, 3]


function unionSortedArrays(arr1, arr2) {
  var newArr=[];
  var tracker1=0;
  var tracker2=0
  while (tracker1<arr1.length && tracker2<arr2.length){
      if(arr1[tracker1]==arr2[tracker2]){
          newArr.push(arr1[tracker1]);
          tracker2++;
          tracker1++
      }
      else if (arr1[tracker1]>arr2[tracker2]){
          tracker2++
      }
      else tracker1++;
    }
    return newArr;
}

console.log(unionSortedArrays([1, 2, 2, 3], [2, 2, 4]));
// should log [2, 2]


function unionSortedArraysDedupe(arr1, arr2) {
  // your code here
}

console.log(unionSortedArraysDedupe([1, 2, 2, 3], [2, 2, 4]));
// should log [2]


/**
 * takes in a 2-dimensional array with equal rows and columns
 * returns an integer
 * the absolute difference between the sum of the two diagonals
 */

function diagonalDifference(twoDArray) {
  // your code here
}

Math.abs(5 - 10); // returns 5

console.log(diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));
// should log 0: (1 + 5 + 9) - (3 + 5 + 7)