//#1

function printUpTo(x){ 
    for (var i = 1; i <= x; i++) {
     console.log(i); 
    } 
    if(x<0) {
         console.log('negative number');
         return false;
    }
  } 
  printUpTo(1000); 
  y = printUpTo(-10);
  console.log(y);

  //#2

  function printSum(x){
    var sum = 0;
  for (var i=0; i<=255; i++){
      console.log (i);
      console.log(sum+=i);
  }
    return sum
  }
  y = printSum(255); 
  console.log(y); 

  //#3
  function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum+=x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) );

  //Extra
  function arrLargest(arr){
    var max=arr[0];
    for (var i=0;i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
var numArray=[1,30,5,7];
console.log (arrLargest(numArray));