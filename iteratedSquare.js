function iteratedSquare(n) {
  var current=n;
  var hundred=0, ten=0, ones=0;
  while(current!=1 && current!=89)
  {
    hundred=Math.floor(current/100);
    current=current-100*hundred;
    ten=Math.floor(current/10);
    current=current-10*ten;
    ones=current;
    //calculating next number
    current=hundred**2+ten**2+ones**2;
  }
  return current;
}
