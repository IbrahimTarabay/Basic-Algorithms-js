function findLongestWordLength(str) {
  var arr = [...str];
  var len = str.length;
  var lenarr = [];
  var j = 0;
  var k = 0;
  for (var i =0; i < len; i++){
   if(arr[i] === ' '){
     j = i;
     lenarr.push(j-k);
     console.log(lenarr);
     k = j+1;
  }

    if (i === len-1){
    lenarr.push(i-j);
    console.log(lenarr);
    return Math.max(...lenarr);
  }
   
}
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");