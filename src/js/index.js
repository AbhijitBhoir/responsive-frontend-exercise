(function($) {
  $(document).ready(function() {
    // Mobile menu toggle.
    $("#hamburger-icon").click(function() {
      $("header nav").slideToggle();
    });

    // Create slider of testimonials.
    if ($(window).width() < 768) {
      $("#testimonials .wrapper").slick({
        autoplay: true,
        arrows: false,
        slidesToShow: 1
      });
    }
  });

  $(window).resize(function() {
    if ($(window).width() < 768) {
      $("#testimonials .wrapper")
        .not(".slick-initialized")
        .slick({
          autoplay: true,
          arrows: false,
          slidesToShow: 1
        });
    } else {
      $("#testimonials .wrapper").slick("unslick");
    }
  });
})(jQuery);
