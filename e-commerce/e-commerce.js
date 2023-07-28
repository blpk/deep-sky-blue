var object2=document.getElementById("o2");
object2.addEventListener("mouseover",change,false);
function change(){
    setTimeout(change1,1500);

}
function change1(){
    object2.setAttribute("src", "AJ1offwhite.png");

}
object2.addEventListener("mouseleave",change2,false);
function change2(){
    object2.setAttribute("src", "object2.png");
}
