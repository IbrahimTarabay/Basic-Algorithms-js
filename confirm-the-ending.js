function confirmEnding(str, target) {
  var arr1 = [...str];
  var arr2 = [...target];
  var larr1;
  var larr2;
  var sum = 0;
  larr1 = arr1.length;
  larr2 = arr2.length;
  console.log(arr1);
  console.log(arr2);
  console.log(larr1);
  console.log(larr2);
  
  var lolo = arr1.slice((larr1-larr2),larr1);
  console.log(lolo);
  
    for (var i = 0; i<larr2; i++ ){
      if (lolo[i]===target[i]){
           sum +=1;
      }
    }

 console.log(sum);
 if (sum === larr2){
    return true;
 }
 else{
   return false;
 }

}

confirmEnding("Bastian", "ian");