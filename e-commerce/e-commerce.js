var object4=document.getElementById("o4");
object4.addEventListener("mouseover",change,false);
function change(){
    setTimeout(change2, 1500);
}
object4.addEventListener("mouseleave",change1,false);
function change1(){
    object4.setAttribute("src","object4.png");
}

function change2(){
    object4.setAttribute("src","tft.jpg");
}