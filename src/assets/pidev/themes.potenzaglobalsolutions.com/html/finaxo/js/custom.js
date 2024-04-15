/*

Template: Finaxo - Business and Finance HTML5 Template
Author: potenzaglobalsolutions
Design and Developed by: potenzaglobalsolutions.com

NOTE: This file contains all scripts for the actual Template.

*/

/*================================================
[  Table of contents  ]
================================================

:: Menu
:: Counter
:: Owl carousel
:: Swiper slider
:: Slickslider
:: Magnific Popup
:: Shuffle
:: Datetimepicker
:: Select2
:: Range Slider
:: Countdown
:: Scrollbar
:: Sticky
:: Back to top
:: Search
:: PieChart

======================================
[ End table content ]
======================================*/
//POTENZA var

(function ($) {
  "use strict";
  var POTENZA = {};

/*************************
  Predefined Variables
*************************/
  var $window = $(window),
    $document = $(document),
    $body = $('body'),
    $countdownTimer = $('.countdown'),
    $pieChart = $('.round-chart'),
    $counter = $('.counter');
  //Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };

/*************************
      Menu
  *************************/
  POTENZA.dropdownmenu = function () {
    if ($('.navbar').exists()) {
      $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
          $('.dropdown-submenu .show').removeClass("show");
        });
        return false;
      });
    }
  };

/*************************
    Counter
*************************/
  POTENZA.counters = function () {
    var counter = jQuery(".counter");
    if (counter.length > 0) {
      $counter.each(function () {
        var $elem = $(this);
        $elem.appear(function () {
          $elem.find('.timer').countTo();
        });
      });
    }
  };

/*************************
    Owl carousel
*************************/
  POTENZA.carousel = function () {
    var owlslider = jQuery("div.owl-carousel");
    if (owlslider.length > 0) {
      owlslider.each(function () {
        var $this = $(this),
          $items = ($this.data('items')) ? $this.data('items') : 1,
          $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
          $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
          $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
          $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
          $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
          $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
          $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
          $space = ($this.attr('data-space')) ? $this.data('space') : 30,
          $animateOut = ($this.attr('data-animateOut')) ? $this.data('animateOut') : false;

        $(this).owlCarousel({
          loop: $loop,
          items: $items,
          responsive: {
            0: {
              items: $this.data('xx-items') ? $this.data('xx-items') : 1
            },
            480: {
              items: $this.data('xs-items') ? $this.data('xs-items') : 1
            },
            768: {
              items: $this.data('sm-items') ? $this.data('sm-items') : 2
            },
            980: {
              items: $this.data('md-items') ? $this.data('md-items') : 3
            },
            1200: {
              items: $items
            }
          },
          dots: $navdots,
          autoplayTimeout: $autospeed,
          smartSpeed: $smartspeed,
          autoHeight: $autohgt,
          margin: $space,
          nav: $navarrow,
          navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
          autoplay: $autoplay,
          autoplayHoverPause: true
        });
      });
    }
  }



/*************************
    Swiper slider
*************************/

  POTENZA.swiperAnimation = function () {

  var siperslider = jQuery(".swiper-container");

  if (siperslider.length > 0) {


            var swiperAnimation = new SwiperAnimation();

                var swiper = new Swiper(".swiper-container", {
                  init : true,
                  direction: "horizontal",
                  effect: "fade",
                  loop: true,

                  keyboard: {
                    enabled: true,
                    onlyInViewport: true
                  },


                    // Navigation arrows
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },

                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                    },


                  on: {
                    init: function() {
                      swiperAnimation.init(this).animate();
                    },
                    slideChange: function() {

                      swiperAnimation.init(this).animate();
                    }
                  }
                });

    }

  }

/*************************
    Slickslider
*************************/
  POTENZA.slickslider = function () {
    if ($('.slider-for').exists()) {
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });
    }
  };

  /*************************
      Magnific Popup
  *************************/
  POTENZA.mediaPopups = function () {
    if ($(".popup-single").exists() || $(".popup-gallery").exists() || $('.modal-onload').exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
      if ($(".popup-single").exists()) {
        $('.popup-single').magnificPopup({
          type: 'image'
        });
      }
      if ($(".popup-gallery").exists()) {
        $('.popup-gallery').magnificPopup({
          delegate: 'a.portfolio-img',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          }
        });
      }
      if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      }
      var $modal = $('.modal-onload');
      if ($modal.length > 0) {
        $('.popup-modal').magnificPopup({
          type: 'inline'
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
        var elementTarget = $modal.attr('data-target');
        setTimeout(function () {
          $.magnificPopup.open({
            items: {
              src: elementTarget
            },
            type: "inline",
            mainClass: "mfp-no-margins mfp-fade",
            closeBtnInside: !0,
            fixedContentPos: !0,
            removalDelay: 500
          }, 0)
        }, 1500);
      }
    }
  }


  /*************************
      Shuffle
  *************************/
   POTENZA.shuffle = function () {
   if ($('.my-shuffle-container').exists()) {
    var Shuffle = window.Shuffle;
      var element = document.querySelector('.my-shuffle-container');
      var sizer = element.querySelector('.my-sizer-element');

      var shuffleInstance = new Shuffle(element, {
        itemSelector: '.grid-item',
        sizer: sizer, // could also be a selector: '.my-sizer-element'
        speed: 700,
        columnThreshold: 0
      });
      jQuery(document).ready(function(){
      jQuery( document ).on( 'click', '.btn-filter', function(){
          var data_group = jQuery(this).attr('data-group');
          if( data_group != 'all' ){
            shuffleInstance.filter([data_group]);
          } else {
            shuffleInstance.filter();
          }
        });
      });
       }
 }

  /*************************
      Datetimepicker
  *************************/
  POTENZA.datetimepickers = function () {
    if ($('.datetimepickers').exists()) {
      $('#datetimepicker-01, #datetimepicker-02').datetimepicker({
        format: 'L'
      });
      $('#datetimepicker-03, #datetimepicker-04').datetimepicker({
        format: 'LT'
      });
    }
  };

  /*************************
      Select2
  *************************/
  POTENZA.select2 = function () {
    if ($('.basic-select').exists()) {
      var select = jQuery(".basic-select");
      if (select.length > 0) {
        $('.basic-select').select2({dropdownCssClass : 'bigdrop'});
      }

    }
  };

  /*************************
      Range Slider
  *************************/
  POTENZA.rangesliders = function () {
    if ($('.property-price-slider').exists()) {
      var rangeslider = jQuery(".rangeslider-wrapper");
      $("#property-price-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 10000,
        from: 1000,
        to: 8000,
        prefix: "$",
        hide_min_max: true,
        hide_from_to: false
      });
    }
  };

  /*************************
      Countdown
  *************************/
  POTENZA.countdownTimer = function () {
    if ($countdownTimer.exists()) {
      $countdownTimer.downCount({
        date: '12/25/2022 12:00:00', // Month/Date/Year HH:MM:SS
        offset: -4
      });
    }
  }

  /*************************
      Scrollbar
  *************************/
  POTENZA.scrollbar = function () {
    var scrollbar = jQuery(".scrollbar");
    if (scrollbar.length > 0) {
      //Sidebar Scroll
      var scroll_light = jQuery(".scroll_light");
      if (scroll_light.length > 0) {
        $(scroll_light).niceScroll({
          cursorborder: 0,
          cursorcolor: "rgba(255,255,255,0.25)"
        });
        $(scroll_light).getNiceScroll().resize();
      }
      // Chat Scroll
      var scroll_dark = jQuery(".scroll_dark");
      if (scroll_dark.length > 0) {
        $(scroll_dark).niceScroll({
          cursorborder: 0,
          cursorcolor: "rgba(0,0,0,0.1)"
        });
        $(scroll_dark).getNiceScroll().resize();
      }
    }
  }

/*************************
         Sticky
*************************/

POTENZA.isSticky = function () {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
       $('.header-sticky').addClass('is-sticky');
    } else {
       $('.header-sticky').removeClass('is-sticky');
    }
  });
};


/*************************
     Back to top
*************************/
POTENZA.goToTop = function () {
  var $goToTop = $('#back-to-top');
  $goToTop.hide();
  $window.scroll(function () {
    if ($window.scrollTop() > 100) $goToTop.fadeIn();
    else $goToTop.fadeOut();
  });
  $goToTop.on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
}

/*************************
       Search
*************************/
POTENZA.searchbox = function () {
  if (jQuery('.search').exists()) {
     jQuery('.search-btn').on('click', function () {
        jQuery('.search').toggleClass("search-open");
          return false;
         });
      jQuery("html, body").on('click', function (e) {
       if (!jQuery(e.target).hasClass("not-click")) {

            jQuery('.search').removeClass("search-open");
        }
    });
   }
}

/****************************************************
    PieChart
****************************************************/
POTENZA.pieChart = function () {
  if ($pieChart.exists()) {
      $pieChart.each(function () {
          var $elem = $(this),
              pieChartSize = $elem.attr('data-size') || "134",
              pieChartAnimate = $elem.attr('data-animate') || "2000",
              pieChartWidth = $elem.attr('data-width') || "6",
              pieChartColor = $elem.attr('data-color') || "#ffffff",
              pieChartTrackColor = $elem.attr('data-trackcolor') || "rgba(0,0,0,0.10)";
          $elem.find('span, i').css({
              'width': pieChartSize + 'px',
              'height': pieChartSize + 'px',
              'line-height': pieChartSize + 'px'
          });
          $elem.appear(function () {
              $elem.easyPieChart({
                  size: Number(pieChartSize),
                  animate: Number(pieChartAnimate),
                  trackColor: pieChartTrackColor,
                  lineWidth: Number(pieChartWidth),
                  barColor: pieChartColor,
                  scaleColor: false,
                  lineCap: 'square',
                  onStep: function (from, to, percent) {
                      $elem.find('span.percent').text(Math.round(percent));
                  }
              });
         });
      });
  }
}

 /****************************************************
       POTENZA Window load and functions
 ****************************************************/
  //Window load functions
  $window.on("load", function () {
    POTENZA.pieChart();
  });
  //Document ready functions
  $document.ready(function () {
    POTENZA.counters(),
    POTENZA.slickslider(),
    POTENZA.datetimepickers(),
    POTENZA.select2(),
    POTENZA.dropdownmenu(),
    POTENZA.scrollbar(),
    POTENZA.goToTop(),
    POTENZA.swiperAnimation(),
    POTENZA.countdownTimer(),
    POTENZA.mediaPopups(),
    POTENZA.isSticky(),
    POTENZA.shuffle(),
    POTENZA.rangesliders(),
    POTENZA.searchbox(),
    POTENZA.carousel();
  });
})(jQuery);

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5ef9e7664a7c6258179b8a7b/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

document.documentElement.className="js";var supportsCssVars=function(){
  var e,t=document.createElement("style");
  return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};
  supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");
