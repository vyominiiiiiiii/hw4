var press=()=>{
var x=document.getElementById("enter").value;
var time=new Date().getHours();
console.log(time);
if(time<12){
    console.log("Good Morning "+x);
    document.getElementById("show").innerHTML="Good morning "+x;
}
else if(time<14){
    console.log("Good Afternoon "+x);
    document.getElementById("show").innerHTML="Good afternoon "+x;}
else{
    console.log("Good Evening "+x);
    document.getElementById("show").innerHTML="Good evening "+x;
}
}