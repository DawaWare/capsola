(function ($) {
    "user strict";
    // Preloader Js
    $(window).on('load', function () {
      $("[data-paroller-factor]").paroller();
      $('.preloader').fadeOut(1000);
      var img = $('.bg_img');
      img.css('background-image', function () {
        var bg = ('url(' + $(this).data('background') + ')');
        return bg;
      });
    });
    $(document).ready(function () {
      // Nice Select
      $('.select-bar').niceSelect();
      // PoPuP 
      $('.popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false,
        disableOn: 300
      });
      $("body").each(function () {
        $(this).find(".img-pop").magnificPopup({
          type: "image",
          gallery: {
            enabled: true
          }
        });
      });
      // aos js active
      new WOW().init()
      //Faq
      $('.faq-wrapper .faq-title').on('click', function (e) {
        var element = $(this).parent('.faq-item');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('.faq-content').removeClass('open');
          element.find('.faq-content').slideUp(300, "swing");
        } else {
          element.addClass('open');
          element.children('.faq-content').slideDown(300, "swing");
          element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
          element.siblings('.faq-item').removeClass('open');
          element.siblings('.faq-item').find('.faq-title').removeClass('open');
          element.siblings('.faq-item').find('.faq-content').slideUp(300, "swing");
        }
      });
      //Faq
      $('.faq--area .faq-title').on('click', function (e) {
        var element = $(this).parent('.faq--item');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('.faq-content').removeClass('open');
          element.find('.faq-content').slideUp(300, "swing");
        } else {
          element.addClass('open');
          element.children('.faq-content').slideDown(300, "swing");
          element.siblings('.faq--item').children('.faq-content').slideUp(300, "swing");
          element.siblings('.faq--item').removeClass('open');
          element.siblings('.faq--item').find('.faq-title').removeClass('open');
          element.siblings('.faq--item').find('.faq-content').slideUp(300, "swing");
        }
      });
      //Menu Dropdown Icon Adding
      $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
      // drop down menu width overflow problem fix
      $('.submenu').parent('li').hover(function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
          var newpos = -$(menu).width();
          menu.css({
            left: newpos
          });
        }
      });
      $('.menu li a').on('click', function (e) {
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp(300, "swing");
        } else {
          element.addClass('open');
          element.children('ul').slideDown(300, "swing");
          element.siblings('li').children('ul').slideUp(300, "swing");
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp(300, "swing");
        }
      })
      //Widget Slider
      $('.widget-slider').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        items:1,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        margin: 30,
      });
      var owlTutu = $('.widget-slider');
      owlTutu.owlCarousel();
      // Go to the next item
      $('.widget-next').on('click', function() {
          owlTutu.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.widget-prev').on('click', function() {
          owlTutu.trigger('prev.owl.carousel', [300]);
      })
      // Scroll To Top 
      var scrollTop = $(".scrollToTop");
      $(window).on('scroll', function () {
        if ($(this).scrollTop() < 500) {
          scrollTop.removeClass("active");
        } else {
          scrollTop.addClass("active");
        }
      });
      //Click event to scroll to top
      $('.scrollToTop').on('click', function () {
        $('html, body').animate({
          scrollTop: 0
        }, 500);
        return false;
      });
      //Header Bar
      $('.header-bar').on('click', function () {
        $(this).toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.menu').toggleClass('active');
      })
      $('.overlay').on('click', function () {
        $(this).removeClass('active');
        $('.header-bar').removeClass('active');
        $('.menu').removeClass('active');
      })
      // Header Sticky Herevar prevScrollpos = window.pageYOffset;
      var scrollPosition = window.scrollY;
      if (scrollPosition >= 1) {
        $(".header-bottom").addClass('active');
        $(".header-section-2").removeClass('plan-header');
      }
      var header = $(".header-section");
      $(window).on('scroll', function () {
        if ($(this).scrollTop() < 1) {
          header.removeClass("active");
        } else {
          header.addClass("active");
        }
      });
      $('.tab ul.tab-menu li').on('click', function (g) {
        var tab = $(this).closest('.tab'),
          index = $(this).closest('li').index();
        tab.find('li').siblings('li').removeClass('active');
        $(this).closest('li').addClass('active');
        tab.find('.tab-area').find('div.tab-item').not('div.tab-item:eq(' + index + ')').hide(10);
        tab.find('.tab-area').find('div.tab-item:eq(' + index + ')').fadeIn(10);
        g.preventDefault();
      });
      $('.tab-up ul.tab-menu li').on('click', function (g) {
        var tabT = $(this).closest('.tab-up'),
          indexT = $(this).closest('li').index();
        tabT.find('li').siblings('li').removeClass('active');
        $(this).closest('li').addClass('active');
        tabT.find('.tab-area').find('div.tab-item').not('div.tab-item:eq(' + indexT + ')').slideUp(400);
        tabT.find('.tab-area').find('div.tab-item:eq(' + indexT + ')').slideDown(400);
        g.preventDefault();
      });
      // counter 
      $('.counter').countUp({
        'time': 1500,
        'delay': 10
      });
      $('.social-icons li a').on('mouseover', function(e) {
        var social = $(this).parent('li');
        if(social.children('a').hasClass('active')) {
          social.siblings('li').children('a').removeClass('active');
          $(this).addClass('active');
        } else {
          social.siblings('li').children('a').removeClass('active');
          $(this).addClass('active');
        }
      });
      //Widget Slider
      $('.testimonial-slider').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        items:1,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        margin: 0,
        mouseDrag: false,
        touchDrag: true,
      });
      var owlBela = $('.testimonial-slider');
      owlBela.owlCarousel();
      // Go to the next item
      $('.testi-next').on('click', function() {
          owlBela.trigger('prev.owl.carousel');
      })
      // Go to the previous item
      $('.testi-prev').on('click', function() {
          owlBela.trigger('next.owl.carousel', [300]);
      })
      //Widget Slider
      $('.mobile-slider-16').owlCarousel({
        loop:true,
        nav:false,
        dots: true,
        items:1,
        autoplay:true,
        autoplayTimeout: 2500,
        autoplayHoverPause:false,
        margin: 0,
        mouseDrag: false,
        touchDrag: false,
      });
      //Widget Slider
      $('.mobile-slider').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        items:1,
        autoplay:true,
        autoplayTimeout: 4000,
        autoplayHoverPause:false,
        margin: 0,
        mouseDrag: false,
        touchDrag: false,
      });
      var owlC = $('.mobile-slider');
      owlC.owlCarousel();
      // Go to the next item
      $('.cola-next').on('click', function() {
          owlC.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.cola-prev').on('click', function() {
          owlC.trigger('prev.owl.carousel', [300]);
      })
      //Widget Slider
      $('.colaboration-slider').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        items:1,
        autoplay:true,
        autoplayTimeout: 4000,
        autoplayHoverPause:false,
        margin: 0,
        mouseDrag: false,
        touchDrag: false,
      });
      var owlF = $('.colaboration-slider');
      owlF.owlCarousel();
      // Go to the next item
      $('.cola-next').on('click', function() {
          owlF.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.cola-prev').on('click', function() {
          owlF.trigger('prev.owl.carousel', [300]);
      })
      //Widget Slider
      $('.banner-4-slider').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        items:1,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        margin: 0,
        mouseDrag: false,
        touchDrag: true,
      });
      var owlD = $('.banner-4-slider');
      owlD.owlCarousel();
      // Go to the next item
      $('.ban-next').on('click', function() {
          owlD.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.ban-prev').on('click', function() {
          owlD.trigger('prev.owl.carousel', [300]);
      })
      //Widget Slider
      $('.banner-1-slider').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        items:1,
        autoplay:false,
        margin: 0,
        mouseDrag: false,
        touchDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        // animateOut: 'slideOutUp',
        // animateIn: 'slideInDown',
      });
      var owlE = $('.banner-1-slider');
      owlE.owlCarousel();
      // Go to the next item
      $('.ban-click').on('click', function() {
          owlE.trigger('next.owl.carousel');
      })
      //Range Slider
      $( function() {
        $( "#usd-range" ).slider({
          range: "min",
          value: 250,
          min: 1,
          max: 500,
          slide: function( event, ui ) {
            $( "#usd-amount" ).val( ui.value + " Users" );
          }
        });
        $( "#usd-amount" ).val( $( "#usd-range" ).slider( "value" ) + " Users");
      } );
      //Sponsor Slider 
      $('.sponsor-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2,
            },
            480:{
                items:3,
            },
            768:{
                items:4,
            }
        }
      })
      $('.sponsor-slider-two').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2,
            },
            480:{
                items:3,
            },
            768:{
                items:5,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            },
        }
      })
      $('.sponsor-slider-3').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2,
            },
            480:{
                items:3,
            },
            768:{
                items:4,
            },
            992:{
                items:5,
            },
            1200:{
                items:6,
            },
        }
      })
      $('.sponsor-slider-4').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2,
            },
            480:{
                items:3,
            },
            768:{
                items:5,
            },
            992:{
                items:6,
            },
            1200:{
                items:7,
            },
        }
      })
      $('.logo-slider').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2,
            },
            480:{
                items:3,
            },
            768:{
                items:4,
            },
            992:{
                items:5,
            },
            1200:{
                items:6,
            },
        }
      })
      $('.client-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
            },
            500:{
                items:2,
            },
            992:{
                items:3,
            }
        }
      })
      $('.history-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        center: true,
        responsive:{
            0:{
                items:1,
            },
            767:{
                items:3,
            },
            1199:{
                items:5,
            },
        }
      })
      $('.tool-slider').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: true,
        navText: ["<i class='flaticon-double-left-angle-arrows' aria-hidden='true'></i>","<i class='flaticon-double-angle-arrow-pointing-to-right' aria-hidden='true'></i>"],
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
            },
            500:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                items:2,
            }
        }
      })
      //feature-item-2-slider 
      $('.feature-item-2-slider').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1200:{
                items:3,
            }
        }
      })
      //Pricing SLider
      $('.pricing-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
      })
      if ($('.feat-slider').length) {
        $('.feat-slider').owlCarousel({
          center: true,
          items: 1,
          // autoplay: true,
          // autoplayTimeout: 3000,
          loop: true,
          margin: 0,
          singleItem: true,
          nav: false,
          dots: false,
          thumbs: true,
          mouseDrag: false,
          touchDrag: true,
          thumbsPrerendered: true,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
        });
      }
      var owlFeat = $('.feat-slider, .app-screenshot-slider-20, .feature-content-slider-20');
      // Go to the next item
      $('.feat-prev').on('click', function() {
        owlFeat.trigger('prev.owl.carousel');
      })
      // Go to the previous item
      $('.feat-next').on('click', function() {
          owlFeat.trigger('next.owl.carousel', [300]);
      })
      if ($('.work-slider').length) {
        $('.work-slider').owlCarousel({
          center: true,
          items: 1,
          // autoplay: true,
          // autoplayTimeout: 2500,
          loop: false,
          margin: 0,
          singleItem: true,
          nav: true,
          dots: false,
          thumbs: true,
          mouseDrag: false,
          touchDrag: true,
          thumbsPrerendered: true,
          // animateOut: 'fadeOut',
          // animateIn: 'fadeIn',
        });
      }

      // JS 4.0.1 Starts
      $('.screenshot-slider, .screenshot-slider-3').owlCarousel({
          items: 1,
          loop: false,
          margin: 30,
          singleItem: true,
          nav: false,
          dots: false,
        });
      var owlSrn = $('.screenshot-slider, .screenshot-slider-3');
      // Go to the next item
      $('.app-prev').on('click', function() {
        owlSrn.trigger('prev.owl.carousel');
      })
      // Go to the previous item
      $('.app-next').on('click', function() {
          owlSrn.trigger('next.owl.carousel', [300]);
      })
      $('.screenshot-slider-2').owlCarousel({
        items: 1,
        loop: false,
        margin: 30,
        singleItem: true,
        nav: false,
        dots: true,
        dotsContainer: '.dots-2'
      });
      $('.app-screenshot-slider-20, .how-slider-20').owlCarousel({
        items: 1,
        loop: false,
        margin: 30,
        singleItem: true,
        nav: false,
        dots: true,
        dotsContainer: '.dots-2',
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        mouseDrag: false,
      });
      $('.client-slider-2, .feature-content-slider-20').owlCarousel({
        items: 1,
        loop: false,
        margin: 30,
        singleItem: true,
        nav: false,
        dots: false,
      });
      $('.amazing-slider').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
            },
            450:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:3,
                margin: 70,
            }
        }
      })

      $('.up--down--overflow').prev('*').addClass('pb-lg-200');
      $('.up--down--overflow').next('*').addClass('pt-lg-200');
      $('.up--down--overflow').addClass('pt-lg-0 pb-lg-0');


      // JS 4.0.1 Ends


      $('.chorka').on('click', function(){
          $('.swap-area').toggleClass('active');
      })
      
      $('.client-item-16 .client-thumb').on('mouseover', function (e) {
        var element = $(this).parent('.client-item-16');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.removeClass('active');
        } else {
          element.siblings('.client-item-16').find('.client-content').removeClass('active');
          element.siblings('.client-item-16').removeClass('active');
          element.children('.client-content').addClass('active');
          element.addClass('active');
        }
      })
    });
  })(jQuery);
  