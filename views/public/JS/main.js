$(window).scroll(function(){
    if($(window).scrollTop() != 0){
        $('.fixNAVplz').addClass('colorNav');
    }else{
        $('.fixNAVplz').removeClass('colorNav');
    }});

$(".fa-angle-double-down").click(function() {
    $('html,body').animate({
        scrollTop: $("#landingPageSection").offset().top - 87},
        1500);
});

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 500) {
            $(".fa-bars").addClass("changeHamburger");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".fa-bars").removeClass("changeHamburger");
        }
    });
});
