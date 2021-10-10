function happy(number) {
  var sum=SquareSum(number);
  if(sum==1) return true;
  while(sum>9)
  {
    if(sum==1)
      return true;
    sum=SquareSum(sum);
  }
  if(sum==1) return true;
  return false;

}

function SquareSum(num)
{
  var sum=0;
  while(num>0)
  {
    sum+=Math.floor((num % 10)**2);
    num=Math.floor(num/10);
  }
  console.log("sum is: "+sum);
  return sum;
}

console.log("happy 1:"+happy(1));
console.log("happy 7:"+happy(7));
