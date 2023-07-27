
var imgs=document.getElementsByTagName("img");

var object3=document.getElementById("o3");
object3.addEventListener ("mouseover", change, false);
function change () {
    setTimeout (change2, 1500);
}
object3.addEventListener ("mouseleave", change1, false);
function change1 () {
    object3.setAttribute ("src", "object3.png")
}
function change2 () {
    object3.setAttribute ("src", "applewatchimage.png");
}

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

var object5=document.getElementById("o5");
object5.addEventListener ("mouseover", change5, false);
function change5 () {
    setTimeout (change25, 1500);
}
object5.addEventListener ("mouseleave", change15, false);
function change15 () {
    object5.setAttribute ("src", "object5.png");
}
function change25 () {
    object5.setAttribute ("src", "https://media.cnn.com/api/v1/images/stellar/prod/230314150437-04-nasa-spacesuit-history-eva.jpg?c=1x1");
}