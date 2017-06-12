// $(document).ready(function() {
//   var waypoint = new Waypoint({
//     element: document.getElementById('aboutSec'),
//     handler: function(direction) {
//       alert('I am 20px from the top ' + 'Direction: ' + direction)
//     },
//     offset:20
//   })
// });


//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$(document).ready(function() {
    $(window).scroll(function() {
        $('.hideme').each(function(i) {
            var bottomOfObject = $(this).offset().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            if(bottomOfWindow > bottomOfObject) {
              $(this).animate({'opacity':'1'},2000);
            }
        });
    });
});


// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 8000,
  });
});
