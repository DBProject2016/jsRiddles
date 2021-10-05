function mode(arr) {
  var tuples=[];

  for(var i=0; i<arr.length; i++)
  {
    var item=arr[i];
    var times=countInArray(arr[i],arr);
    tuples.push([item,times]);
  }

  var result=[];
  var themode=findTimesOfModeValue(tuples);
  for(var k=0; k<tuples.length; k++)
  {
    if(tuples[k][1]==themode)
      result.push(tuples[k][0]);
  }
  console.log("result is: ",result);
  result=no_duplicates(result);
  console.log("tuples are: ",tuples);
  return result;
}

function no_duplicates(arr)
{
    var temp=[];
    var situ=false;
    if(arr.length==0) return [];
    for(var i=0; i<arr.length-1; i++)
    {
        for(var j=i+1; j<arr.length; j++)
        {
            if(arr[j]==arr[i])
                {
                    situ=true;
                }
            if(contains(temp,arr[i])==false)
                temp.push(arr[i]);
        }
        if(situ==false && contains(temp,arr[i])==false)
            temp.push(arr[i]);
        situ=false;
    }
    arr=temp;
    return arr;
}

function contains(arr,item)
{
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]==item)
            return true;
    }
    return false;
}

function findTimesOfModeValue(mat)
{
  if(mat.length==0) return null;
  var item=mat[0][0];
  var times=mat[0][1];
  for(var i=0; i<mat.length; i++)
  {
    if(mat[i][1]>times)
    {
      item=mat[i][0];
      times=mat[i][1];
    }
  }
  return times;
}

function countInArray(num,arr)
{
  var count=0;
  for(var i=0; i<arr.length; i++)
  {
    if(arr[i]==num)
      count++;
  }
  return count;
}

//console.log(mode([1, 2, 4, 4, 1]));
//console.log(mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]));
