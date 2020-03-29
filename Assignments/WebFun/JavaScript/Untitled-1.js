//#1
//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function arr(){
    var array=[]
    for(var i=1; i<=255;i++){
        array.push [i];
    }
    return array;
}
console.log(array());

//#2
//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function sumEven(){
    var sum= 0;
    for(var i=1;i<1001;i++){
        if(i%2==0){
            sum+=i;
        }
    }
    return sum;
}
console.log(sumEven());

//#3
//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function sumOdd(){
    var sum=0;
    for(var i=1;i<5001;i++){
        if(i%2!==0);
        sum+=i;
    }
    return sum;
}
console.log(sumOdd());

//#4
//Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function sumArr(arr){
    var sum=0;
    for(var i=0; i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sumArr([]));

//#5
//Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr){
    var max=0;
    for(var i=0;i<arr.length;i++){
        if(arr[0]<arr[i]){
            max=arr[i];
        }
    }
    return max;
}
console.log(findMax([]));

//#6
//Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function ave(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
    sum+=arr[i];
    }
  sum= sum/arr.length;
    return sum;
}
console.log(ave([]));

//#7
//Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function allOdd(arr){
    var num=[]
    for(var i=1; i<51; i++){
          if(i%2==1){
             num.push(i);
          }
        
      }
    return num;
  }
  console.log(allOdd());
  
