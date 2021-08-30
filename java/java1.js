
///////////////////dynamic height//////////////
$(document).ready(function(){
 
    var  winH = $(window).height();
   
 $('.header').height( winH);
})




///// owl-carsoul

/******************* owl carsoul*/ 
$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:2000,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
           loop:true
        },
        600:{
            items:3,
            loop:true
        },
        1000:{
            items:3,
            loop:true,
 
        }
    }
})