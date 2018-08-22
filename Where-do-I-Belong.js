function getIndexToIns(arr, num) {
  //getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
    let larr = arr.length;
    arr.sort(numberAs);
    console.log(larr);
    console.log(arr);
    
    if (larr == 0){
        return 0;
    }
    else if (num == arr[0]){
         return 0;
       }
    else if (num > arr[larr-1]){
         return larr;
       }

     for(var i =0; i<larr; i++){
       if (num > arr[i] && num <= arr[i+1]){
           return i+1;
       }
     }
}

function numberAs(a,b) {
  return a-b;
}

getIndexToIns([], 1);