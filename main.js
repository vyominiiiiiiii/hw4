var press=()=>{
var x=document.getElementById("enter").value;
var time=new Date().getHours(x);
console.log(time);
if(time<10){
    console.log("Good Morning Harry");
    document.getElementById("show").innerHTML="Good morning Harry";
}
else if(time<14){
    console.log("Good Afternoon Harry");
    document.getElementById("show").innerHTML="Good afternoon Harry";}
else{
    console.log("Good Evening Harry");
    document.getElementById("show").innerHTML="Good evening Harry";
}
}