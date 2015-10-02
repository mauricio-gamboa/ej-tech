(function (w, d, $, u) {
  'use strict';

  var $menuTogglers = $('.main-navigation .toggler');

  $menuTogglers.on('mouseenter', function () {
    var _this = $(this);
    var $menu = _this.next();
    _this.removeClass('collapsed');
    $menu.addClass('in');
  });

  $menuTogglers.on('mouseleave', function () {
    var _this = $(this);
    var $menu = _this.next();
    _this.addClass('collapsed');
    $menu.removeClass('in');
  });

  $('#products-home-slider').owlCarousel({
    autoPlay: false,
    singleItem: true,
    navigation: true,
    pagination: false,
    navigationText: false
  });

  $('#latest-news-slider').owlCarousel({
    autoPlay: false,
    singleItem: true
  });

  $('#latest-blog-posts').owlCarousel({
    autoPlay: false,
    singleItem: true
  });

  $('#product-overview-slider').owlCarousel({
    autoPlay: false,
    singleItem: true
  });

  $('.single-item-slider').owlCarousel({
    autoPlay: false,
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