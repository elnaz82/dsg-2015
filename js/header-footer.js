$(document).ready(function () {
  $('[data-toggle="site-menu"]').click(function () {
    $('html').toggleClass('openNav');
    $('.main-nav-section').css('min-height', $('html').height());
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
});