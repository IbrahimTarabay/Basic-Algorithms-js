function findElement(arr, func) {
  let num = 0;
  var len = arr.length;   

   for (var i = 0; i<len; i++){
        if (arr[i] % 2 === 0 ){
             return arr[i];
        }

   }

}

findElement([1, 8, 3, 4], num => num % 2 === 0);