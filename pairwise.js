function Appeared(array, item)
{
  for(var i=0; i<array.length; i++)
  {
    if(array[i]==item)
      return true;
  }
  return false;
}

function pairwise(arr, arg) {
  var sum=0;
  var used=[];
  for(var i=0; i<arr.length; i++)
  {
    for(var j=i+1; j<arr.length; j++)
    {
      if(arr[i]+arr[j]==arg && Appeared(used,i)==false && Appeared(used,j)==false)
      {
        sum+=i+j;
        used.push(i);
        used.push(j);
        console.log("index1: "+i+", index2: "+j);
        break;
      }
    }
  }
  return sum;
}

//console.log(pairwise([1,4,2,3,0,5], 7));
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
