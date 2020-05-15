/**
 * takes in a sorted array of numbers
 * and a search value
 * returns a boolean
 * 
 * Is the given value in the array?
 * DON'T ITERATE THROUGH THE ENTIRE ARRAY
 */

function binarySearch(arr, val) {
    var start = 0;
    var end = arr.length-1;
    while (start <= end){
        var pointer = start + Math.floor((end-start)/2);
        if (arr[pointer]==val){
            return true;
        }
        else if (arr[pointer]<val){
            start = pointer+1;
        }
        else if (arr[pointer]>val){
            end = pointer-1;
        }
    }
    return false;
  }
  
  console.log(binarySearch([1, 2, 3, 4, 5], 5)); // should log true
  console.log(binarySearch([1, 2, 4, 5], 5)); // should log false
  
  
  /**
   * BONUS: Once done, create this version
   * returns the number of occurrences of the value
   */
  
  function binarySearchBonus(arr, val) {
    var start = 0;
    var end = arr.length-1;
    var counter = 0;
    while (start <= end && counter == 0){
        var pointer = Math.floor((end-start)/2)+start;
        if (arr[pointer]==val){
            counter ++;
        }
        else if (arr[pointer]<val){
            start = pointer+1;
        }
        else if (arr[pointer]>val){
            end = pointer-1;
        }
    }
    if (counter>0){
        var stop = false;
        var x = 1
        while (stop == false){
            if(arr[pointer+x]==val){
                counter++;
                x++;
            }
            else{
                stop = true;
            }
        }
        x = 1
        stop = false;
        while (stop == false){
            if(arr[pointer-x]==val){
                counter++;
                x++;
            }
            else{
                stop = true;
            }
        }
    }
    return counter
  }
  
  console.log(binarySearchBonus([1, 2, 3, 4, 5], 3)); // should log 1
  console.log(binarySearchBonus([1, 4, 4, 4, 4, 10000], 4)); // should log 3
  