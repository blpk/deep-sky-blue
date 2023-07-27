function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "";

    if (hh === 0) {
        hh = 12;
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);
}

$(document).ready(function () {
    currentTime();

    var totalHumansNumber = 0;




    $('.menu-icon').on('click', function () {
        $('.sliding-menu').toggleClass('active');
        $('.menu-icon').toggleClass('active');
    });

    $('.btn-close').on('click', function () {
        $('.sliding-menu').removeClass('active');
    });




    $('.calendar-popup i').on('click', function () {
        $('.calendar-popup input').click();
    });




    $('.plus-icon').on('click', function () {
        if (totalHumansNumber < 99) {
            totalHumansNumber = totalHumansNumber + 1;
        }

        if (totalHumansNumber >= 0 && totalHumansNumber < 10) {
            $('.human-number').html('0' + totalHumansNumber);
        }

        else {
            $('.human-number').html(totalHumansNumber);
        }
    })

    $('.minus-icon').on('click', function () {
        if (totalHumansNumber > 0) {
            totalHumansNumber = totalHumansNumber - 1;
        }
        if (totalHumansNumber >= 0 && totalHumansNumber < 10) {
            $('.human-number').html('0' + totalHumansNumber)
        }
        else {
            $('.human-number').html(totalHumansNumber);
        }
    })



    $('input[name="daterange"]').daterangepicker({
        drops: 'up',
        autoApply: true,
        singleDatePicker: true,
        alwaysShowCalendars: true,
    },
        function (start, end, label) {
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });

    $('input[name="daterange"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        console.log(picker);
        console.log(picker.startDate.format('YYYY-MM-DD'));
        var day = 60 * 60 * 24 * 1000 * 11;
        var startDate = new Date(picker.startDate.format('YYYY-MM-DD'));
        var newEndDate = new Date(startDate.getTime() + day);
        $('#start_date').html(picker.startDate.format('MM/DD/YYYY'));
        $('#end_date').html((newEndDate.getMonth() + 1) + '/' + newEndDate.getDate() + '/' + newEndDate.getFullYear());
    });




    $.scrollify({
        section : ".scrollify-item",
        scrollSpeed: 1500,
        offset : 0,
        updateHash: true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
      });
            
    
      new WOW({ offset: 40 }).init();

});


