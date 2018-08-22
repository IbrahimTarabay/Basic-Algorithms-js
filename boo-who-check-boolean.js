function booWho(bool) {
 
   if(bool === 1 || bool === 0){
    return false;
  }
   else if (bool === true || bool === false){
    return true;
  }
  else{
    return false;
  }
}

booWho(null);