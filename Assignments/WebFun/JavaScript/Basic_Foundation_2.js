//#1
// Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function changeBig(arr){
    for(var i=0; i<arr.length;i++){
        if(arr[i]>0){
            arr[i]='big';
        }
    }
    return arr;
}
console.log(changeBig([]));

//#2
//Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function lowHigh(arr){
    var min=arr[0];
    var max=arr[0];
    for(var i=0; i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>arr[arr.length-1]){
            max=arr[i];
        }
    }
  console.log (min);  
  return max;  
}
console.log(lowHigh([]));

//#3
//Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function number(arr){
    console.log(arr[arr.length-2]);  
    for(var i=0; i<arr.length;i++){
        if(arr[i]%2!==0){
          return arr[i];
      }
    }
  }
  console.log(number([]));

//#4
//Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function double(arr){
    var arrNew=[];
    for(var i=0; i<arr.length;i++){
        arr[i]=arr[i]*2;
        arrNew.push (arr[i]);
    }
    return arrNew;
}
console.log(double([]));

//#5
//Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr){
    var count=0;
    for( var i=0; i<arr.length;i++){
        if(arr[i]>0){
            count++; 
        }
    }arr[arr.length-1]=count;
    return arr;
}
console.log(countPositives([]));

//#6
// Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function threeRow(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0 &&  arr[i+1]%2==0 && arr[i+2]==0){
            console.log("Even more so!");
        }
        if(arr[i]%2!==0) && arr[i+1]%2!==0 && arr[i+2]!==0){
            console.log ("That's odd!");
        }    
    }
}
threeRow([1,1,1,2,2,2]);
