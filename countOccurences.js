function countSubstring(str, subStr) {
  var count=0;
  for(var i=0; i<str.length; i++)
  {
    var found=true;
    var runner=0;
    for(var j=0; j<subStr.length; j++)
      {
        if(str[i+runner]!=subStr[j])
          found=false;
        runner++;
      }
    if(found==true)
      {
        count++;
        i=i+subStr.length-1;
        //console.log("times counted: "+count+", index is: "+i);
      }
    }
  return count;
}
//console.log(countSubstring("thth", "th"));
//console.log(countSubstring("the three truths", "th"));
