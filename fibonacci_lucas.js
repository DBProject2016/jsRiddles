function fib_luc(n, len, w) {
  var result=[];
  var current=0;
  if(w=="f")
  {
    //fibonacci
    var startNums=[1,1];
    result.push(1); result.push(1);
  }
  if(w=="l")
  {
     //lucas
    var startNums=[2,1];
    result.push(2); result.push(1);
  }
  for(var i=2; i<n; i++)
  {
      startNums.push(SumUntil(startNums,n));
      result.push(SumUntil(result,n));
  }

  for(var j=0; j<len-n; j++)
  {
    current=SumNNumbers(startNums,n,j);
    //console.log("current is: ",current);
    startNums.push(current);
    result.push(current);
    //console.log("startNums is: "+startNums);
    //console.log("Result is: "+result);
  }
  return result;
}

function SumNNumbers(array,num,start)
{
    if(array.length<num) return 0;
    var sum=0;
    for(var i=0; i<num; i++)
        sum+=array[i+start];
    return sum;
}

function SumUntil(arr, index)
{
    var sum=0;
    for(var i=0; i<arr.length && i<=index; i++)
    {
        sum+=arr[i];
    }
    return sum;
}

//console.log(fib_luc(3,15,"f"));
//console.log(fib_luc(2,10,"f"));
//console.log(fib_luc(4,15,"f"));
