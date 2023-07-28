// This is the JavaScript in the first HTML page
$(document).ready(function() {
    var selectedColor = "red";
    localStorage.setItem('selectedColor', selectedColor); // Save the initial color to localStorage

    $('.color-choose input').on('click', function() {
        var headphonesColor = $(this).attr('data-image');
        selectedColor = $(this).val();
   
        $('.left-column img.active').removeClass('active');
        $('.left-column img[data-image="' + headphonesColor + '"]').addClass('active');

        // Save the selected color in localStorage
        localStorage.setItem('selectedColor', selectedColor);
    });
   
    $('.cable-choose button').on('click', function() {
        var selectedSize = $(this).text();

        // Save the selected size in localStorage
        localStorage.setItem('selectedSize', selectedSize);
    });
});
