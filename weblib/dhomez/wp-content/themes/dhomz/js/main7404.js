$(document).on('ready', function(){
    $('.preloader').fadeOut();
    $('body').addClass('loaded');
});

AOS.init({
    once: true,
    offset:200,
    duration:800,
    easing:'ease-in-sine',
    delay:100,
    disable:'mobile'
});

$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });

    // $("body").niceScroll({
    //     cursorborder: "1px solid #333",
    //     zindex: '9999',
    //     horizrailenabled: false
    // });
    $('.mobile-menu-toggler').on('click', function(){
        $('.menu-wrap').toggleClass('menu-visible');
        $('body').toggleClass('menu-showing');

    });

    $('.mob-menu-close').on('click', function(){
        $('.menu-wrap').removeClass('menu-visible');
        $('body').removeClass('menu-showing');
    });
   // fixedFooter();


   $(document).on('click', 'ul.menu li.menu-item-has-children>span', function(){
        $(this).parent('li').toggleClass('sub-visible');
        $(this).parent('li').find('.sub-menu').slideToggle();
   });

   $(document).on('click', '#fixed-search', function(e){
        e.preventDefault();
        if(!$('body').hasClass('search-block-visible')){
            $('body').addClass('search-block-visible');
            $('<div class="search-overlay"></div>').appendTo('body');
        }        
    });

    $(document).on('click', '.search-overlay', function(){
        $('body').removeClass('search-block-visible');
        $(this).remove();
    });

  //  $(document).click(function(e) {

        // if ($(e.target).closest(".search-block").length === 0 && $(e.target).closest("#fixed-search").length === 0) {
        //     $('body').removeClass('search-block-visible');
        //     alert('yes');
        // } else {
        //     alert('else');
        // }
 //   });

  /*  $(document).on('click', '.download-brochure', function(e){
    // $('.download-brochure').click(function(e){
        e.preventDefault();
        $('.brochure-modal').fadeIn();
        $('<div class="modal-bg"></div>').appendTo('body');
    });*/
    $(document).on('click', '.modal-bg, .bm-close', function(){
        $('.brochure-modal').fadeOut();
        setTimeout(function(){
            $('.modal-bg').remove();
        }, 500);
    });
});

function fixHeaderOnScroll(){
    var getHeaderHeight = $('.header').outerHeight();
    $('body:not(.home) .wrapper').css('padding-top',getHeaderHeight);
    if('.error-image'){
        $('.error-image').css('margin-top',parseInt(0 - getHeaderHeight));
    }
//    $('body:not(.home) .header').css('height',getHeaderHeight);
    $(window).scroll(function(){
        var sticky = $('.header'),
            scroll = $(window).scrollTop();
        if (scroll >= 300) {
            sticky.addClass('fixed');
        } else {
            sticky.removeClass('fixed');
            getHeaderHeight = $('.header').outerHeight();
            $('body:not(.home) .wrapper').css('padding-top',getHeaderHeight);
        }
    });
}

$(document).ready(function() {
    fixHeaderOnScroll();
});

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var myEfficientFn = debounce(function() {
    fixHeaderOnScroll();
}, 150);

window.addEventListener('resize', myEfficientFn);


