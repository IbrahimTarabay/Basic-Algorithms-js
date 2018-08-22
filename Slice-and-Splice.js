function frankenSplice(arr1, arr2, n) {

   let larr1 = arr1.length ;
   let larr2 = arr2.length;
   let arr22 = arr2.slice(0,larr2);
    
    for (var i = larr1-1; i !== -1;  i--){
         
      
      arr22.splice(n,0,arr1[i]);

        
    }
    console.log(arr2);
  return arr22;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);