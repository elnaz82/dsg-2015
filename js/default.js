$(document).ready(function () {
  var pageWidth = $('html').width();

  if(pageWidth < 768) { //XS
    moveTo('.move-to-xs');
  }
  else if(pageWidth < 992) { //SM
    moveTo('.move-to-sm');
  }
  else if(pageWidth < 1200) { //MD
    moveTo('.move-to-md');
  }
  else { //LG
    moveTo('.move-to-lg');
  }

  //Social media toolbar
  if ($('.social-media-toolbar').length) {
    //Google+
    (function () {
      var po = document.createElement('script');
      po.type = 'text/javascript';
      po.async = true;
      po.src = '//apis.google.com/js/plusone.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(po, s);
    })();

    //Retrieve bit.ly url
    if (window.XMLHttpRequest && false) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/hidden/bitly.asmx/get?URI=" + encodeURIComponent('http://' + location.host + '/' + location.pathname));
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            xml = $($.parseXML(xhr.responseText));
            var obj = jQuery.parseJSON(xml.find("string").text());

            if (typeof obj.data != 'undefined') {
              burl = obj.data.url;
            }
          }
        }
      }
      xhr.send();
    }

    //Interaction when clicking on facebook, twitter and linkedin
    $('.social-media-toolbar').on('click', 'a', function (e) {
      var parent = $(this).parent(),
        u = location.href,
        t = document.title;

      if (parent.hasClass('facebook')) {
        if (typeof s == 'object') {
          //s.tl(this, 'o', 'Share-Facebook');
          s.events = "event13";
          s.eVar18 = "Facebook";
          s.linkTrackVars = "events,eVar18";
          s.linkTrackEvents = "event13";
          s.tl(true, 'o', 'Social Media');
        }

        //_gaq.push(['_trackSocial', 'Facebook', 'Share']);

        e.preventDefault();
        window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(burl) + '&t=' + encodeURIComponent(t), 'facebook', 'width=480,height=240,toolbar=0,status=0,resizable=1');
      }
      else if (parent.hasClass('twitter')) {
        if (typeof s == 'object') {
          //s.tl(this, 'o', 'Share-Twitter');
          s.events = "event13";
          s.eVar18 = "Twitter";
          s.linkTrackVars = "events,eVar18";
          s.linkTrackEvents = "event13";
          s.tl(true, 'o', 'Social Media');
        }
        //_gaq.push(['_trackSocial', 'Twitter', 'Tweet']);

        if (burl == '') {
          burl = u;
        }
        e.preventDefault();
        window.open('http://twitter.com/share?via=DellSoftware&url=' + encodeURIComponent(burl) + '&text=' + encodeURIComponent(t) + ',%20&counturl=' + encodeURIComponent(u), 'twitter', 'width=480,height=380,toolbar=0,status=0,resizable=1');
      }
      else if (parent.hasClass('linkedin')) {
        if (typeof s == 'object') {
          //s.tl(this, 'o', 'Share-LinkedIn');
          s.events = "event13";
          s.eVar18 = "LinkedIn";
          s.linkTrackVars = "events,eVar18";
          s.linkTrackEvents = "event13";
          s.tl(true, 'o', 'Social Media');
        }
        //_gaq.push(['_trackSocial', 'LinkedIn', 'Share']);

        e.preventDefault();
        window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(burl) + '&title=' + encodeURIComponent(t), 'linkedin', 'width=480,height=360,toolbar=0,status=0,resizable=1');
      }
    });
  }
});

function moveTo(selector) {
  $(selector).each(function() {
    var target = $(this).data('target'), action = $(this).data('action');
    console.log(action);
    if(action === undefined) {
      $(target).replaceWith($(this));
    }
    else if(action == 'prepend') {
      $(target).prepend($(this));
    }
    else if(action == 'append') {
      $(target).append($(this));
    }
  });
}