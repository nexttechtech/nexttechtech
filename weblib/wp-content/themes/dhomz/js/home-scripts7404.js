$(window).load(function(){
    setTimeout(function () {
        $(window).scrollTop(0);
    }); 
    setTimeout(function(){
        $('.landing-mouse').css('opacity','0.7');
    }, 1200);
});

function equalizeAppColHeight() {
    $('.app-col-inner').each(function(){  
        $('.app-col-inner').css('height','auto');
        var highestBox = 0;
        if($(this).height() > highestBox){  
            highestBox = $(this).height();  
        }
        $('.app-col-inner').height(highestBox);
    });
}


var noMouse = false;

function noMouseFuntion() {
    if($(window).width() < 1025){
        noMouse = true;
    } else {
        noMouse = false;
    }
}

var myScrollFn = debounce(function() {
    noMouseFuntion();
    equalizeAppColHeight();
}, 250);

window.addEventListener('resize', myScrollFn);

$(window).on('load', function(){
    noMouseFuntion();
});

function stopWheel(e){
        if(!e){ /* IE7, IE8, Chrome, Safari */ 
            e = window.event; 
        }
        if(e.preventDefault) { /* Chrome, Safari, Firefox */ 
            e.preventDefault(); 
        } 
        e.returnValue = false; /* IE7, IE8 */
        $('.landing-logo-wrap, .landing-mouse').animate({opacity:'0'}, 1000);
        $(".landing").animate({
            height: 0
            }, 1500, function() {
            $('body').removeClass('landing-page');
        });
        $('.fixed-icons').show();
        setTimeout(function(){
            $('.fixed-icons').css('top','50%');            
        }, 2000); 
        equalizeAppColHeight();
        noMouse = true;  
}

 if(!noMouse){
    var elem = document.getElementById ("landing-block");
    if (elem.addEventListener) {    
        elem.addEventListener ("mousewheel", stopWheel, false);
        elem.addEventListener ("DOMMouseScroll", stopWheel, false);
    }
    else {
        if (elem.attachEvent) { 
            elem.attachEvent ("onmousewheel", stopWheel);
        }
    }
}










// $(window).one( 'scroll', function(){
//     if(!noMouse){
//     // $('body').addClass('landing-page');
//         // $(".landing").slideUp(1500, function(){
//         //     $('.landing-logo-wrap').animate({opacity:'0'});            
//         // });


//         $(".landing").animate({
//             height: 0
//             }, 2000, function() {
//             $("html, body").animate({ scrollTop: 0 }, 1000, function(){
//                 $('body').removeClass('landing-page');
//             });
//         });
            
//         // $(".landing").slideUp(1500, function(){
                        
//         // });
        
//         $('.fixed-icons').show();
//         setTimeout(function(){
//             $('.fixed-icons').css('top','50%');            
//         }, 1500); 
//         equalizeAppColHeight();
//         noMouse = true;     
//         // $('html, body').css({
//         //     overflow: 'auto',
//         //     height: 'auto'
//         // });
//         //$('.landing-mouse span').trigger('click');
//     }
// });

// $(window).on('scroll touchmove mousewheel', function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     return false;
// });

$(document).ready(function(){   

    tippy('.key-col-inner', {
        arrow: true,
        arrowType: 'round',
        inertia: true
    }); 

    $('.landing-mouse span').on('click', function(){
        $('.landing-logo-wrap, .landing-mouse').animate({opacity:'0'}, 1000);
        $(".landing").animate({
            height: 0
            }, 1500, function() {
            $('body').removeClass('landing-page');
        });
        $('.fixed-icons').show();
        setTimeout(function(){
            $('.fixed-icons').css('top','50%');            
        }, 2000); 
        equalizeAppColHeight();
        noMouse = true;  
    });    

    
    $(document).one("keydown", function(e) {
        if (e.which == 40) { 
            $('.landing-logo-wrap, .landing-mouse').animate({opacity:'0'}, 1000);
            $(".landing").animate({
                height: 0
                }, 1500, function() {
                $('body').removeClass('landing-page');
            });
            $('.fixed-icons').show();
            setTimeout(function(){
                $('.fixed-icons').css('top','50%');            
            }, 2000); 
            equalizeAppColHeight();
            noMouse = true;  
           return false;
        }
    });

    $('.header-slider').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4500,
        prevArrow: '<div class="arrow-slick arrow-prev"><span></span></div>',
        nextArrow: '<div class="arrow-slick arrow-next"><span></span></div>',
        appendArrows: $('.hs-arrows'),
        infinite: true,
        pauseOnHover: false,
        lazyLoad:"progressive",
        speed:600,
        fade: true,
        cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"
	});
	
    $('.search-box select').SumoSelect({
        search: true
    });
    
    $('.agents-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        variableWidth: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    equalizeAppColHeight();
});
