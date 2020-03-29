  //gangsta shit HELLA DONE
  function moveZeroes(arr){
    var n=arr.length;
    for (var i=0; i<n; i++){
      if(arr[i]===0){
         arr.push (arr[i]);
         arr.splice (i,1);
         i--;
        }
    }
    return arr;
}
console.log(moveZeroes([0,1,0,11,2,0,4,3]));