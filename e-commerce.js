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