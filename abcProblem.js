function canMakeWord(word) {
var w1=word.toLowerCase();
var abc=[];
for(var i=0; i<26; i++)
  abc.push(0);
for(var i=0; i<w1.length; i++)
{
  var index=parseInt(w1[i],36)-10;
  abc[index]++;
  if(abc[index]>2)
    return false;
}
if(abc[parseInt('a',36)-10]+abc[parseInt('n',36)-10]>2) return false;
if(abc[parseInt('b',36)-10]+abc[parseInt('o',36)-10]>2) return false;
if(abc[parseInt('c',36)-110]+abc[parseInt('p',36)-10]>2) return false;
if(abc[parseInt('d',36)-10]+abc[parseInt('q',36)-10]>2) return false;
if(abc[parseInt('e',36)-10]+abc[parseInt('r',36)-10]>2) return false;
if(abc[parseInt('f',36)-10]+abc[parseInt('s',36)-10]>2) return false;
if(abc[parseInt('g',36)-10]+abc[parseInt('t',36)-10]>2) return false;
if(abc[parseInt('h',36)-10]+abc[parseInt('u',36)-10]>2) return false;
if(abc[parseInt('i',36)-10]+abc[parseInt('v',36)-10]>2) return false;
if(abc[parseInt('j',36)-10]+abc[parseInt('w',36)-10]>2) return false;
if(abc[parseInt('k',36)-10]+abc[parseInt('x',36)-10]>2) return false;
if(abc[parseInt('l',36)-10]+abc[parseInt('y',36)-10]>2) return false;
if(abc[parseInt('m',36)-10]+abc[parseInt('z',36)-10]>1) return false;
console.log("array of times is: "+abc);
console.log("w1 is: "+w1);
return true;
}

console.log(canMakeWord("COMMON"));
