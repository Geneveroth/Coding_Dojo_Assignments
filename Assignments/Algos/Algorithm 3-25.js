//write a function that finds the "target" variable 
//"target" variable is the first 2 numbers of a given array that add to the number
//return an array that contains the 2 numbers 

function sumTwoArray(arr,target){
    var newArray=[];
    for(var i=0; i<arr.length;i++){
      for(var j=i+1;j<arr.length;j++) {
        if(arr[j]+arr[i]==target){
            var temp=arr[j];
            var temp2=arr[i]
            newArray.push(temp,temp2);
          return newArray;
        }
      }
    }
}
console.log (sumTwoArray([5,2,3,6,1],10));


//can i write this code so that i dont use a nested for loop? make it so i will increment and j will decrement until they make a pair