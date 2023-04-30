$(document).ready(function(){
    $("#slider_1").owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        items:3,
        dots:true,
        dotsEach:true,
        autoplay: true,
        smartSpeed: 2000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }

    })
    
  });