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

  $('.single-item-slider').owlCarousel({
    autoPlay: true,
    singleItem: true
  });

  var $featureTrigger = $('.feature-title a');

  $featureTrigger.on('click', function (e) {
    e.preventDefault();
    var _this = $(this);
    var $texts = _this.closest('.feature-section').find('.features-list li .text');
    var $singleTriggers = _this.closest('.feature-section').find('.features-list li .title a');

    console.log($singleTriggers);

    $texts.slideToggle(function () {
      var _that = $(this);

      if (_that.is(':visible')) {
        _this.html('hide all');
        $singleTriggers.html('hide');
      } else {
        _this.html('show all');
        $singleTriggers.html('show');
      }
    });
  });

  var $featureSingleTrigger = $('.feature-section .title a');

  $featureSingleTrigger.on('click', function (e) {
    e.preventDefault();
    var _this = $(this);

    var $text = _this.closest('.title').parent().find('.text');

    $text.slideToggle(function () {
      var _that = $(this);

      if (_that.is(':visible')) {
        _this.html('hide');
      } else {
        _this.html('show');
      }
    });
  });
})(window, document, jQuery);