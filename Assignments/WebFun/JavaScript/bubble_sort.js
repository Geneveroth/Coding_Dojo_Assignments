function bubbleSort(arr){ 
    for (var i=0;i<arr.length; i++){
          //scans thru the array
          for(var j=0;j<arr.length;j++){
              //switches places
              if(arr[j]>arr[j+1]){
                var temp=arr[j];
                  arr[j]=arr[j+1];                     
                  arr[j+1]=temp; 
          }
      }
        
   }
  
  return arr;
  }
  console.log(bubbleSort([])); 

  //what can i do to improve this? place a while loop to make sure unnecessary checks arent done