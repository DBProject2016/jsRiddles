function allEqual(arr) {
  if(arr.length==0) return true;
  var first=arr[0];
  for(var i=1; i<arr.length; i++)
  {
    if(arr[i]!=first)
      return false;
  }
  return true;
}

function azSorted(arr) {
  for(var i=0; i<arr.length-1; i++)
  {
    if(arr[i]>=arr[i+1])
      return false;
  }
  return true;
}

//console.log(allEqual(["AA", "AA", "AA", "AA"]));
console.log(azSorted(["AA", "AA", "AA", "AA"]));
