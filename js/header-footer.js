$(document).ready(function () {
  var pageWidth = $('html').width();

  if(pageWidth < 768) { //XS
    $('.main-nav-section').on('click', '.subLinks > a', function(e) {
      e.preventDefault();
    });

    $('.footer-top-section').on('click', 'a[href=#]', function(e) {
      e.preventDefault();
    });
  }

  $('[data-toggle="site-menu"]').click(function () {
    $('html').toggleClass('openNav');
  });

  $('.main-nav-section').on('click', 'li', function(e) {
    e.stopPropagation();
    $(this).toggleClass('open');
  });

  $('#mobile-search-button').on('click', function(e) {
    $('#masthead-search').toggleClass('open-search');
  });

  $('.footer-menu').on('click', 'li', function(e) {
    e.stopPropagation();
    $(this).toggleClass('open');
  });

  $('body').on('click', '.dropdown', function() {
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
});