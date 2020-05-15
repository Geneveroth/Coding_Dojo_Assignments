/**
 * takes in an array
 * returns THE SAME array sorted
 * compares adjacent elements
 * and swaps positions if necessary
 * largest elements "bubble" to the top
 * BONUS: fast exit if portion already sorted
 */

function bubbleSort(arr) { 
  var temp;
  Boolean sorted;
  for (var i=0; i<arr.length-1; i++){
    sorted=true;
      for (var j=0; j<arr.length-i-1; j++){
          if (arr[j+1] < arr[j]){
            temp=arr[j+1]
            arr[j+1]=arr[j];
            arr[j]=temp;
            sorted=false;
          }
      }
      if(sorted==true)
        break;
  }
 
}

console.log(bubbleSort([1, 5, 2, 8, 3, 4]));  [2,5,1]  
// should log [1, 2, 3, 4, 5, 8]
//1,2,5,3,4,8
//1,2,3,4,5,8


/**
 * takes in an array
 * returns THE SAME array sorted
 * each time through, select the smallest element
 * at the end, swap it with the element at the current position
 */

function selectionSort(arr) {
  var temp;
  for (var i=0; i<arr.length-2; i++){
    temp=arr[i];
      for (var j=i+1; j<arr.length-1; j++){
          if (arr[j] < arr[i]){
            arr[i]=arr[j];
            arr[j]=temp;
          }
      }
  }
  
}

console.log(selectionSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]