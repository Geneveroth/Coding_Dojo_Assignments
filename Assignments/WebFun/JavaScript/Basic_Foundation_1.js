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
  
//#8
//Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(arr,y){
    var count=0;
    for(var i=0;i<arr.length; i++){
      if(arr[i]>y){
        count++
      }
    }
    return count;
  }
  console.log(greaterThanY([],)); 

//#9
//Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function square(arr){
    for(var i=0; i<arr.length;i++){  
      arr[i]=arr[i]*arr[i];  
      }   
    return arr;
}
console.log(square([]));

//#10
//Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function replaceNeg(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]=0
        }
    }return arr
}
console.log(replaceNeg([]));

//#11
//Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function minMaxAvg(arr){
    var avg=0;
   var min=arr[0];
   var max=arr[0];
   for(var i=0;i<arr.length;i++){
       avg+=arr[i];
       if (arr[i]>max){
           max=arr[i];
       }
       else if(min>arr[i]){
           min=arr[i]
    }
   }
       return [min,max,avg/arr.length];
}
console.log(minMaxAvg([]));

//#12
//Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr){
    var num=arr[0];
    var num2=arr[arr.length-1];
     arr[0]=num2;
    arr[arr.length-1]=num;            
    return arr; 
}
console.log(swap([]));

//#13
//Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2]

function swap(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]='Dojo'
        }
    }
    return arr;
}
console.log(swap([]));