var imgs=document.getElementsByTagName("img");

var object5 = document.getElementById("o5")

object5.addEventListener("mouseover", change5, false);
function change5(){
    setTimeout(change25,1700);
}

object5.addEventListener("mouseleave", change15, false);
function change15(){
    object5.setAttribute("src", "object5.png");
}

function change25(){
    object5.setAttribute("src", "https://www.kicksonfire.com/wp-content/uploads/2022/10/Air-jordan-1-Lost-And-Found-Singles-Day-0.jpg")
}