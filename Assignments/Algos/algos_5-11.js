/**
 * takes in two SORTED arrays
 * returns a new SORTED array
 * with the largest occurrence of each distinct number
 * BONUS: deduplicate the output
 */

function intersectSortedArrays(arr1, arr2) {
    //make count variable per array
    //if count of specific number in first array >1, push that variable into new array
    let count=0;
    let newArr=[];
    let charObjectCount ={};
    let charObjectCount ={};
    for (let i=0; i<arr1.length-1; i++){
        if(charObjectCount.hasOwnProperty(arr1[i])===false){
           charObjectCount[arr1[i]]++;
           newArr.push(arr1[i]); //newarr[1,2, obj {1:1, 2:2}]
        }
        else{
            charObjectCount[arr1[i]]++;
        }
    }
    for (let j=0; j<arr2.length-1; j++){
      if(charObjectCount.hasOwnProperty(arr2[j])===false){
          charObjectCount[arr2[j]]++;
      }
      else {
          charObjectCount2[arr[j]]++;
      }
          //if arr2[j] in obj1, increment count of arr2[j] by 1 in obj 2
        charObjectCount2[arr2[j]]++; //obj2{2:1, 3:2}
        //if arr[j] not in newarr, push arr[j]
        if (charObjectCount.hasOwnproperty(arr2[j]) ==false)
            //if arr[j] count > arr[i] count
           // newArr.push(arr2[j]) * count;
     }
     else{
         charObjectCount2[arr2[j]]++;
     }
  }
    return newArr;
}
  
  console.log(intersectSortedArrays([1, 2, 2], [2, 3, 3]));
  // should log [1, 2, 2, 3, 3]
  
  
  function intersectSortedArraysDedupe(arr1, arr2) {
    // your code
  }
  
  console.log(intersectSortedArraysDedupe([1, 2, 2], [2, 3, 3]));
  // should log [1, 2, 3]