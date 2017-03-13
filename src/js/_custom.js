  $(document).ready(function() {
    var owl = $('.owl-carousel');
    if(owl.length > 0){
      owl.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        slideBy: 1
      })

      // Custom Navigation Events
      $(".owl-carousel-arrows.owl-carousel-arrows-next").click(function() {
          owl.trigger('next.owl.carousel');
      });

      $(".owl-carousel-arrows.owl-carousel-arrows-prev").click(function() {
          owl.trigger('prev.owl.carousel');
      });
    }
  })
