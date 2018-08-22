function mutation(arr) {

 var sum = 0;

 let arr1 = arr.slice(0,1);
 let arr2 = arr.slice(1,2);
  console.log(arr1);
  console.log(arr2);

 let starr1 = arr1.toString();
 let starr2 = arr2.toString();
  console.log(starr1);
  console.log(starr2);

 let starrL1 = starr1.toLowerCase();
 let starrL2 = starr2.toLowerCase();
 

 let arr11 = [...starrL1];
 let arr22 = [...starrL2];
  console.log(arr11);
  console.log(arr22);

 let larr11 = arr11.length;
 let larr22 = arr22.length;
  console.log(larr11);
  console.log(larr22);


  for (var i = 0; i < larr22; i++){
    for (var j = 0; j < larr11; j++ ){
       if (arr22[i] == arr11[j]){
            sum += 1;
           console.log(arr22[i]);
           break;

       }
    }
  }
  if (sum == larr22){
    return true;
  }
  else{
    return false;
  }

}

mutation(["hello", "Hel"]);