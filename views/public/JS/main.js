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

$(window).on('load', function() { //start after HTML, images have loaded
 
    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;
 
            //interval between items (in milliseconds)
            var itemInterval = 5000;
 
            //cross-fade time (in milliseconds)
            var fadeTime = 2500;
 
            //count number of items
            var numberOfItems = $('.rotating-item1').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.rotating-item1').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item1').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item1').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();
 
});

$(window).on('load', function() { //start after HTML, images have loaded
 
    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;
 
            //interval between items (in milliseconds)
            var itemInterval = 3000;
 
            //cross-fade time (in milliseconds)
            var fadeTime = 2500;
 
            //count number of items
            var numberOfItems = $('.rotating-item2').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.rotating-item2').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item2').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item2').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();
 
});