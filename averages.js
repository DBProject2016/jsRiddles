function pythagoreanMeans(rangeArr) {
  var arithmetic=0;
  var geometric=1;
  var harmonic=0;
  for(var i=0; i<rangeArr.length; i++)
  {
    arithmetic+=rangeArr[i];
    geometric*=rangeArr[i];
    harmonic+=(1/rangeArr[i]);
  }
  arithmetic=arithmetic/rangeArr.length;
  geometric=Math.pow(geometric,(1/rangeArr.length));
  harmonic=rangeArr.length/harmonic;

  var item={
    values:{
      "Arithmetic": arithmetic,
      "Geometric": geometric,
      "Harmonic": harmonic
    },
    test: 'is A >= G >= H ? yes'
  }
  //console.log("item is: ", item);
  return item;
}

console.log(pythagoreanMeans([1, 2,3,4,5,6,7,8,9,10]));
