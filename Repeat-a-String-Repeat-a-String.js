function repeatStringNumTimes(str, num) {
   let arr = [...str];
   if (num <= 0){
    return "";
   }
   for(var i =1; i < num; i++){
     arr.push(str);
   
   }
  return arr.join('');
}

repeatStringNumTimes("abc", 3);