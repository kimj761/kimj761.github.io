console.log( now );

    var circle = "";

    // Sunday
    if ( now.day == 0 ) {
        // style sunday dot
        circle = $('#sunday');
    }

    // Monday
    if ( now.day == 1 ) {
        circle  = $('#monday');
    }

    if ( now.day == 2 ) {
        circle = $('#tuesday');
    }

    if ( now.day == 3 ) {
        circle = $('#wednesday');
    }

    if ( now.day == 4 ) {
        circle = $('#thursday');
    }
    
    if ( now.day == 5 ) {
        circle = $('#friday');
    }
    
    if ( now.day == 6 ) {
        circle = $('#saturday');
    }

    // if we're only showing current day:
    // in CSS: .circle { display: none; }
    $( circle ).show();

    // change style based on current day:
    // $( circle ).addClass('active');

}

jQuery.fn.shake = function() {
    this.each(function(i) {
        $(this).css({ "position" : "relative" });
        for (var x = 1; x <= 3; x++) {
            $(this).animate({ left: -25 }, 10).animate({ left: 0 }, 50).animate({ left: 25 }, 10).animate({ left: 0 }, 50);
        }
    });
    return this;
}
setInterval(function(){
    $('.red ').shake();
    $('.redyel ').shake();
    $('.yelred ').shake();
    $('.yel ').shake();
    $('.yelgre ').shake();
    $('.greyel ').shake();
    $('.green ').shake();


    },5000);