function ack(m, n) {
if(m==0)
  return n+1;
if(m>0 && n==0)
  return ack(m-1,1);
if(m>0 && n>0)
{
  var second_item=ack(m,n-1);
  return ack(m-1,second_item);
}
}

console.log(ack(1,1));
