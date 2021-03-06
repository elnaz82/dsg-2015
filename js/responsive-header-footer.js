/* Used on Responsive/Non-Responsive New Header/Footer (push to /static/js only) */

var pageWidth = $('html').width();

$(document).ready(function () {
  resize();

  $('.main-nav-section').find('>ul>li:lt(2)').addClass('subLinks');

  $('.main-nav-section').find('ul.tier2').on('click', 'a[href=#]', function (e) {
    if ($('html').width() >= 768) {
      e.preventDefault();
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

  $('body')
    .on('click', '.subLinks > a, .subLinks > span', function (e) {
      if ($('html').hasClass('touch') || pageWidth < 768) {
        e.preventDefault();
        e.stopPropagation();

        var elem = $(this).parent();

        if (elem.hasClass('open')) {
          elem.siblings()
            .find('.open').removeClass('open').end()
            .removeClass('open');

          elem.find('.open').removeClass('open').end().removeClass('open');
        }
        else {
          elem.siblings()
            .find('.open').removeClass('open').end()
            .removeClass('open');

          elem.addClass('open');

          if (pageWidth < 768) {
            var originalBG = $(this).css('background-color');

            elem.css({backgroundColor: '#007db8'});

            $('html, body').animate({scrollTop: $(this).offset().top}, function () {
              elem.animate({backgroundColor: originalBG}, 500, function () {
                elem.css('backgroundColor', '');
              });
            });
          }
        }
      }
    })
    .on('click', '.dropdown', function () {
      $(this).siblings().removeClass('open');
      $('#masthead-search').removeClass('open');
      $(this).toggleClass('open');
    })
    .on('click', function () {
      if(pageWidth > 767) {
        $('#country-popup').css('display', '');
      }
    })
    .on('click', '.navbar-toggle', function (e) {
      if ($('html').width() < 768) {
        e.preventDefault();
        $('html').toggleClass('openNav');
        $('.utility').find('> li').removeClass('open');
        $('#masthead-search').removeClass('open');
      }
    });

  /* Search */
  $('#search-form').on('click', 'button', function(e) {
		e.preventDefault();
		goAllSearch3();
	});

  /* Country Dropdown */

  $('#current-country').on('click', function (e) {
    if(pageWidth > 767) {
      e.stopPropagation();
      e.preventDefault();
      $('#country-popup').toggle();
    }
  });

  $('footer').css('margin', '');
});

$(window).load(function() {
  $('.bootstrap').each(function() {
    //copy modernizr classes from html tag to be copied over to where .bootstrap class is defined.
    $(this).get(0).className = $.trim($(this).get(0).className) + ' ' + $.trim($('html').get(0).className);
  });
});

$(window).resize(resize);

function resize() {
  pageWidth = $('html').width();

  //Debug
  //$('#search-input').val(pageWidth);

  var w = (pageWidth >= 768) ? '300':'auto';

  //Increase width of UL if its child doesn't have sublinks
  $('.main-nav-section').find('ul:gt(0)').each(function() {
    if(!$(this).find('> li.subLinks').length) {
      $(this).css('width', w);
    }
  });

  $('.open').removeClass('open');
  $('#country-popup').css('display', '');
}
function makeResponsive() {
  $('.not-responsive').removeClass('not-responsive').addClass('is-responsive');
  $('#wrapper').attr('id', '').addClass('site-wrapper').wrapInner('<div class="site-canvas">');
}