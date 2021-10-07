
var a=document.querySelectorAll("input");
if(a[3].value === "Ghaziabad")
{
alert(a[0].value+" "+ a[3].value+" is not a safe place for you immidiately change your location");
a[3].value=prompt("Enter your new location");
}