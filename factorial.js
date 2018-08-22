function factorialize(num) {
  
  if (num > 0){
        
        num = num * factorialize(num-1);
  
  }
  if(num === 0){
    return 1;
  }
  return num;
}

factorialize(10);