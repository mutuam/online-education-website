$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleclass('fa-times');
        $('.navbar').toggleclass('nav-toggle');
    });
    $(Window).on('scroll load',function(){
        $('.fa-bars').removeclass('fa-times');
        $('.navbar').removeclass('nav-toggle');
        if(  $(Window).scrolltop() > 30){
            $('.header').addclass('header-active');
        }else{
            $('.header').removeclass('header-active');
        }
        $('.section'),each(function(){
           var top =  $(Window).scrolltop();
           var id =   $(this).attr('id');
           var height =   $(this).height();
           var top =    $(this).offset().top - 200;
           if(top >= offset  && top < height + offset){
            $('.navbar ul li a').removeclass('active');
            $('.navbar').find('{href="#'+ id +'"}').addclass('active');
           }
        });
    });
});