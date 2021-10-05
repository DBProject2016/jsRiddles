function rms(arr) {
  var sum=0;
  for(var i=0; i<arr.length; i++)
  {
    sum+=arr[i]*arr[i];
  }
  sum=sum/arr.length;
  console.log(Math.sqrt(sum));
  return Math.sqrt(sum);
}
console.log(rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
