// This is the JavaScript in the second HTML page
window.onload = function() {
    var selectedColor = localStorage.getItem('selectedColor');
    var selectedSize = localStorage.getItem('selectedSize');
  
    var purchase = document.getElementById("purchase");

    if (selectedColor && selectedSize) {
        purchase.textContent = "Added a " + selectedSize + " " + selectedColor + " JBL Flip to cart.";
    }
}
