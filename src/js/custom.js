  $(document).ready(function() {
    var owl = $('.promo-gallery .owl-carousel');
    if(owl.length > 0) {
        owl.owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            slideBy: 1,
            dots: false
        });
    }
      // Custom Navigation Events
      $(".owl-carousel-arrows.owl-carousel-arrows-next").click(function() {
          owl.trigger('next.owl.carousel');
      });

      $(".owl-carousel-arrows.owl-carousel-arrows-prev").click(function() {
          owl.trigger('prev.owl.carousel');
      });
    var owl2 = $('.image-gallery .owl-carousel');
    if(owl.length > 0){
        console.log('!!!!!!!!');
        owl2.owlCarousel({
            dots: true,
            nav:false,
            loop:true,
            center:true,
            margin:0,
            autoplayHoverPause: true,
            touchDrag: true,
            smartSpeed: 2000,
            autoplay:true,
            items: 3,
            responsive:{
                0:{
                    items:1,
                    autoplsayTimeout: 1000
                },
                832:{
                    items:2,
                    autoplayTimeout: 2000
                },
                1200:{
                    items:3,
                    autoplayTimeout:2000,
                }
            }
        })
  }
})
