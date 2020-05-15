/**
 * takes in an array
 * returns THE SAME array sorted
 * iterate through each element starting with the second
 * work backwards to "insert" the element
 * in the correct position
 * elements get duplicated forward to make way for the
 * inserted element
 */

function insertionSort(arr) {
  if (arr.length < 2){
      return arr;
  } else if(arr.length === 2){
      if (arr[1] < arr[0]){
          let temp = arr[0];
          arr[0] = arr[1];
          arr[1] = temp;
      }
  } else {
      let runner = arr[1];
      for (let i=1; i<arr.length; i++){
          for (let j=0; j<arr.length; j++){
              if (runner < arr[i-1]{
                  let temp = runner;
                  runner = arr[i-1];
                  arr[i-1] = temp;    

                  //lemme try this
                  
                  var temp = arr[i];
                  for (var i=1; i<arr.length; i++){
                      for (var j=0; j<arr.length; j++){
                          if (arr[i]>arr[j]){
                              arr[j]=temp;
                              arr[i]= 
                              //if true, set [i] to be [j], then set [j] to be temp. i think this i what w neeed
                              

                          }
                      }
                  } 
          }
          }
      }

  }
}

console.log(insertionSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]i was gonna post in vscode but it clsoed
closed
