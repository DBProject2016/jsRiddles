function idMatrix(n) {
var result=[];
for(var i=0; i<n; i++)
  result.push(new Array(n));
for(var i=0; i<n; i++)
  for(var j=0; j<n; j++)
  {
    if(i==j)
      result[i][j]=1;
    else
      result[i][j]=0;
  }
return result;
}
