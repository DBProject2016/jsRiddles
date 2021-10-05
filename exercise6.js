function selectionSort(array) {
  // Only change code below this line
  var minIndex=0;
  for(var i=0; i<array.length; i++)
  {
    minIndex=findMini(array,i);
    var temp=array[i];
    array[i]=array[minIndex];
    array[minIndex]=temp;
  }
  return array;
  // Only change code above this line
}

function findMini(array,startIndex)
{
  if(array.length==0) return null;
  var mini=array[startIndex];
  var index=0;
  for(var i=startIndex; i<array.length; i++)
  {
    if(array[i]<=mini)
    {
      mini=array[i];
      index=i;
    }
  }
  return index;
}

console.log(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
