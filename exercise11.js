//Find The Symmetric Difference Challange
function appearsIn(item,arr)
{
  for(var k=0; k<arr.length; k++)
    if(arr[k]==item)
      return true;
  return false;
}

function no_duplicates(arr)
{
  for(var i=0; i<arr.length; i++)
  {
    for(var j=i+1; j<arr.length; j++)
    {
      if(arr[i]==arr[j])
        arr.splice(i,1);
    }
  }
}

function couple(arr1,arr2,resultArr) {
  if(arr1.length==0 && arr2.length==0) return {};
  if(arr1.length>0)
  {
      for(var i=0; i<arr2.length; i++)
      {
        if(appearsIn(arr2[i],arr1)==false)
        {
          resultArr.push(arr2[i]);
        }
      }
      for(var j=0; j<arr1.length; j++)
      {
        if(appearsIn(arr1[j],arr2)==false)
        {
          resultArr.push(arr1[j]);
        }
      }
      no_duplicates(resultArr);
  }
  else
    {
      no_duplicates(arr2);
      resultArr=arr2;
    }
  return resultArr;
}
function sym(...args) {
  let result=[];
  if(args.length<2)
    return {};
  result=couple(args[0],args[1],result);
  for(var i=2; i<args.length; i++){
    result=couple(args[i], result,[]);
  }
  return result;
}
//console.log(sym([1, 2, 3], [5, 2, 1, 4]));
//console.log(sym([1, 2, 5], [2, 3, 5]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
