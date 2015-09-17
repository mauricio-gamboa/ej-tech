(function (w, d, $, u) {
  'use strict';

  $('#products-home-slider').owlCarousel({
    autoPlay: true,
    singleItem: true,
    navigation: true,
    pagination: false,
    navigationText: false
  });

  $('#latest-news-slider').owlCarousel({
    autoPlay: true,
    singleItem: true
  });

  $('#latest-blog-posts').owlCarousel({
    autoPlay: true,
    singleItem: true
  });

  $('#product-overview-slider').owlCarousel({
    autoPlay: true,
    singleItem: true
  });
})(window, document, jQuery);