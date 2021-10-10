function sumMults(n) {
  var multis=[];
  for(var i=0; i<n; i++)
  {
    if(i%3==0 || i%5==0)
      multis.push(i);
  }
  var sum=0;
  for(var j=0; j<multis.length; j++)
  {
    sum+=multis[j];
  }
  return sum;
}
