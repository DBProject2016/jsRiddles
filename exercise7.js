function insertionSort(array) {
  // Only change code below this line
  if (array.length==0) return [];
  var first=array[0];
  for(var i=0; i<array.length; i++)
  {
    for(var j=i; j>0; j--)
    {
      if(array[j]<array[j-1])
      {
        var temp=array[j];
        array[j]=array[j-1];
        array[j-1]=temp;
        //console.log("values switched: "+array[i]+" , "+array[j]+" , "+array);
      }
    }
  }
  return array;
  // Only change code above this line
}

//console.log(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
console.log(insertionSort([5, 4, 33, 2, 8]));
