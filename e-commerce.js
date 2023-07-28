var object1=document.getElementById("o1");
object1.addEventListener("mouseover",change,false);
function change(){
    setTimeout(change2, 1500);
}
object1.addEventListener("mouseleave",change1,false);
function change1(){
    object4.setAttribute("src","object1.png");
}

function change2(){
    object1.setAttribute("src","black_speaker.png");
}
