function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 for(var i=0; i<=n; i++)
 {
   for(var j=i+1; j<n; j++)
   {
     var c=Math.pow(i,2)+Math.pow(j,2);
     c=Math.pow(c,0.5);
    //console.log("a b c are: "+i+", "+j+", "+c);
     if(n==(i+j+c) && j!=c)
     {
         //console.log("arrived at equality: "+i+", "+j+", "+c+", n is: "+n);
         return i*j*c;
     }

   }
 }
 return 0;
}

console.log(specialPythagoreanTriplet(24));
