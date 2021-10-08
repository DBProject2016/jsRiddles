function convertSeconds(sec) {
  var seconds=sec;
  var weeks=Math.floor(seconds/60/60/24/7);
  seconds=seconds-weeks*60*60*24*7;
  var days=Math.floor(seconds/60/60/24);
  seconds=seconds-days*60*60*24;
  var hours=Math.floor((seconds/60)/60);
  seconds=seconds-60*60*hours;
  var minutes=Math.floor(seconds/60);
  seconds=seconds-minutes*60;
  var result="";
  if(weeks>0)
    result+=weeks+" wk";
  if(days>0)
  {
    if(weeks>0)
      result+=", "+days+" d";
    else
      result+=days+" d";
  }
  if(hours>0)
  {
    if(weeks>0 || days>0)
    {
      result+=", "+hours+" hr";
    }
    else
      result+=hours+" hr";
  }
  if(minutes>0)
  {
    if(weeks>0 || days>0 || hours>0)
    {
      result+=", "+minutes+" min";
    }
    else
      result+=minutes+" min";
  }
  if(seconds>0)
  {
    if(minutes>0 || weeks>0 || days>0 || hours>0)
    {
      result+=", "+seconds+" sec";
    }
    else
      result+=seconds+" sec";
  }

  return result;
}
