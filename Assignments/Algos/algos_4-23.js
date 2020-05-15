/**
 * takes in an integer "cents"
 * returns an object with coin denominations
 * each coin amount should be maximized
 * the total NUMBER of coins should be minimized
 */

function coinChange(cents) {
    var quarterCount=0;
    var dimeCount =0;
    var nickelCount=0;
    var pennyCount =0;
    coinValue = {
        'quarter': 25,
        'dime': 10,
        'nickel': 5,
        'penny': 1
    };

    while (cents > 0)
    {    
        if (coinValue['quarter'] <= cents)
        {
            cents -= coinValue['quarter']
            quarterCount++;
        }
        else if (coinValue['dime'] <= cents)
        {
            cents -= coinValue['dime']
            dimeCount++;
        }
        else if (coinValue['nickel'] <= cents)
        {
            cents -= coinValue['nickel']
            nickelCount++;
        }
        else if (coinValue['penny'] <= cents)
        {
            cents -= coinValue['penny']
            pennyCount++;
        }
    }

    coinTypesCount = {
        'quarter': quarterCount,
        'dime': dimeCount,
        'nickel': nickelCount,
        'penny': pennyCount
    }

    return coinTypesCount;
  }
  
  console.log(coinChange(7));
  // should log { quarters: 0, dimes: 0, nickels: 1, pennies: 2 }
  console.log(coinChange(27));
  // should log { quarters: 1, dimes: 0, nickels: 0, pennies: 2 }
  
  
  /**
   * takes in an UNSORTED array of integers
   * returns either the "missing" number
   * or null if there is no missing number
   */
  
   function missingValue(arr) {
       var temp=0;
       for(var i=0;i<arr.length;i++){
           if(arr[i] > temp){
               temp = arr[i];
           }
       }
       var temp2 = temp-1;
       for(var j=0; j < arr.length; j++)
       {
           if (arr[j] == temp2){
               temp2 = arr[j]
           }  
            if (arr [j]==temp2-1){
                temp2--;
            }
       }
//var temp = arr[0]
// if arr[i>arr[i+1]]
// temp=arr[i]
    //    find highest
       //loop thru again and compare each position to higest -1
       //if true, move to next position
       //if false log the  position value before -1
     
   }
  
   console.log(missingValue([2, 0, 3])); // should log 1
   console.log(missingValue([1, 0, 3, 2])); // should log null