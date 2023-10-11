$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times'); // Use toggleClass instead of toggleclass
        $('.navbar').toggleClass('nav-toggle'); // Use toggleClass instead of toggleclass
    });

    $(window).on('scroll load', function(){ // Use "window" with a lowercase "w"
        $('.fa-bars').removeClass('fa-times'); // Use removeClass instead of removeclass
        $('.navbar').removeClass('nav-toggle'); // Use removeClass instead of removeclass
        if ($(window).scrollTop() > 30) { // Use "scrollTop" with a lowercase "s"
            $('.header').addClass('header-active'); // Use addClass instead of addclass
        } else {
            $('.header').removeClass('header-active'); // Use removeClass instead of removeclass
        }

        $('.section').each(function(){ // Use "each" with a lowercase "e"
            var top = $(window).scrollTop(); // Use "scrollTop" with a lowercase "s"
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200; // Fix variable name and calculate offset

            if (top >= offset && top < height + offset) {
                $('.navbar ul li a').removeClass('active'); // Use removeClass instead of removeclass
                $('.navbar').find('[href="#' + id + '"]').addClass('active'); // Fix the selector
            }
        });
    });
});



