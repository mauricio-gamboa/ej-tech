(function (w, d, $, u) {
  'use strict';

  var $menuTogglers = $('.main-navigation .toggler');
  var $menus = $('.main-navigation .toggler + .sub-menu');

  $menuTogglers.on('click', function () {
    var _this = $(this);
    var $menu = _this.next();
    var $parent = _this.parent();
    var $siblings = $parent.siblings()

    $siblings.removeClass('opened');

    $parent.toggleClass('opened');

    $menuTogglers.addClass('collapsed');
    $menus.removeClass('in');

    _this.removeClass('collapsed');
    $menu.addClass('in');
  });

  var $menuItems = $('.main-navigation > li');

  $menuItems.on('mouseenter', function () {
    var _this = $(this);
    var $toggler = _this.find('.toggler');
    var $menu = _this.find('.sub-menu');
    var $siblings = _this.siblings();
    var $siblingsMenus = $siblings.find('.sub-menu');
    var $siblingsTogglers = $siblings.find('.toggler');

    $siblings.removeClass('opened');
    $siblingsMenus.removeClass('in');
    $siblingsTogglers.addClass('collapsed');

    if (!_this.hasClass('opened')) {
      $toggler.removeClass('collapsed');
      $menu.addClass('in');
    }
  });

  $menuItems.on('mouseleave', function () {
    var _this = $(this);
    var $toggler = _this.find('.toggler');
    var $menu = _this.find('.sub-menu');

    if (!_this.hasClass('opened')) {
      $toggler.addClass('collapsed');
      $menu.removeClass('in');
    }
  });

  //$menuItems.on('mouseleave', function () {
  //  var _this = $(this);
  //  var $menu = _this.next();
  //  _this.addClass('collapsed');
  //  $menu.removeClass('in');
  //});

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