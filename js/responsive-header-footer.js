$(document).ready(function () {
  var pageWidth = $('html').width();

  $('.main-nav-section').find('>ul>li:lt(2)').addClass('subLinks');

  $('.main-nav-section').on('click', '.subLinks > a', function (e) {
    if ($('html').width() < 768) {
      e.preventDefault();
      $(this).parent().toggleClass('open');
    }
  });

  /*$('[data-toggle="site-menu"]').click(function () {
    if ($('html').width() < 768) {
      $('html').toggleClass('openNav');
      $('.utility').find('> li').removeClass('open');
      $('#masthead-search').removeClass('open');
    }
  });*/

  $('#masthead').on('click', '.navbar-toggle', function () {
    if ($('html').width() < 768) {
      $('html').toggleClass('openNav');
      $('.utility').find('> li').removeClass('open');
      $('#masthead-search').removeClass('open');
    }
  });

  $('#mobile-search-button').on('click', function (e) {
    if ($('html').width() < 768) {
      $('#masthead-search').toggleClass('open');
      $('.utility').find('> li').removeClass('open');
      e.stopPropagation();
    }
  });

  $('.footer-top-section').on('click', 'a[href=#]', function (e) {
    if ($('html').width() < 768) {
      e.preventDefault();
    }
  });

  $('.footer-menu').on('click', 'li', function (e) {
    if ($('html').width() < 768) {
      e.stopPropagation();
      $(this).toggleClass('open');
    }
  });

  $('.main-nav-section').find('ul.tier2').on('click', 'a[href=#]', function (e) {
    if ($('html').width() >= 768) {
      e.preventDefault();
    }
  });

  $('.bootstrap').each(function() {
    $(this).get(0).className = $(this).get(0).className + ' ' + $('html').get(0).className;
  });

  if($('html').hasClass('touch')) {
    $('.main-nav-section').on('touchstart', 'a[href=#]', function(e) {
      if($(this).parent().hasClass('open')) {
        $(this).parent().siblings()
          .find('.open').removeClass('open').end()
          .removeClass('open');

        $(this).parent().find('.open').removeClass('open').end().removeClass('open');
      }
      else {
        $(this).parent().siblings()
          .find('.open').removeClass('open').end()
          .removeClass('open');

        $(this).parent().addClass('open');
      }
    });
  }

  /*$('.main-nav-section').on('click', 'li', function(e) {
    e.stopPropagation();
    $(this).toggleClass('open');
  });*/

  $('body').on('click', '.dropdown', function() {
    $(this).siblings().removeClass('open');
    $('#masthead-search').removeClass('open');
    $(this).toggleClass('open');
  });

  /* Country Dropdown */

  $('#list-countries').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();

    $('#list-countries-popup').toggle();
  });

  $('body').on('click', function () {
    $('#list-countries-popup').hide();
  });

  /* Sign In */

  $('#lnkmainloggin').on('click', function(e) {
    e.preventDefault();
    alert('Sign In Clicked');
  });

  $(window).load(function() {
    $('footer').css('margin-top', 0);
  });
});

function makeResponsive() {
  $('.not-responsive').removeClass('not-responsive').addClass('is-responsive');
  $('#wrapper').attr('id', '').addClass('site-wrapper').wrapInner('<div class="site-canvas">');
}