$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navbar-area").removeClass("sticky");
        } else{
            $(".navbar-area").addClass("sticky");
        }
    });
    
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 73;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
    
    
    //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function(){
        $(this).toggleClass("active");
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== Countdown
    
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="header-countdown pt-70 d-flex justify-content-center"><div class="single-count-content count-color-1"><span class="count">%D</span><p class="text">Dias</p></div><div class="single-count-content count-color-1"><span class="count">%H</span><p class="text">Horas</p></div><div class="single-count-content count-color-1"><span class="count">%M</span><p class="text">Minutos</p></div><div class="single-count-content count-color-1"><span class="count">%S</span><p class="text">Segundos</p></div></div>'));
        });
    });
    
    //===== Initiate video lightbox 
   
  const galleryLightbox = GLightbox({
    selector: '.video-lightbox'
  });
    
    //===== WOW
    
    new WOW().init();
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    $('.team-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
        });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    //===== 
    
    
    // Speaker Carousel
	if ($('.speaker-carousel').length) {
		$('.speaker-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 4000,
			autoHeight: false,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				}
			}
		});    		
	}

  //Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	
	
	if($('.ts-image-popup').length){
		$('.ts-image-popup').magnificPopup({
			type: 'inline',
			closeOnContentClick: false,
			midClick: true,
			callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			zoom: {
				enabled: true,
				duration: 500, // don't foget to change the duration also in CSS
			},
			mainClass: 'mfp-fade',
		});
	}
    
    
    
    
    
    
    
    
    
    
    
    
    
});