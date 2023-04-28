function display()
{
 var msg=document.getElementById("msg");
 var evod=document.getElementById("evod");
 var val=document.getElementById("num").value;
 var val2=parseInt(val);
 
if(val2<=0)
{
  evod.innerHTML="";
  msg.innerHTML="Please enter a valid number. \n"+"the number should be neither zero nor negative number";
}
else if(val2%2==0)
{
  msg.innerHTML=val2 + " is an Even Number.\n The next three even numbers are...\n";
  i=val2+2;
  j=i+2;
  k=j+2;
  evod.innerHTML=(i+" "+j+" "+k);
}
else if(val2%2==1)
{
  msg.innerHTML=val2 + " is an ODD Number.\n The next three ODD numbers are...\n";
  i=val2+2;
  j=i+2;
  k=j+2;
  evod.innerHTML=(i+" "+j+" "+k);
}
}