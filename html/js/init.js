// JavaScript Document
$(document).ready(function(e) {
	// First
    $('ul > li:first-child, ol > li:first-child, dl > dt:first-child, dl > dd:first-child, .group .column:first-child, .footer-menu > ul:first-child, #footer-nav ul:first-child, .section .teaser:first-child').addClass('first');
	
	// Last
	$('ul > li:last-child, ol > li:last-child, dl > dt:last-child, dl > dd:last-child, .group .column:last-child, .article:last-child, .article p:last-child, .txt p:last-child, #footer-nav ul:last-child, .section .teaser:last-child').addClass('last');
	
	
	// Scroll to Top
	$(".backToTop").click(function(e) {
	    $("html, body").animate({ scrollTop: 0 }, "slow");
	    e.preventDefault();
	});
	

	var imgHight = $('.box-height .vertical img').height();
	 $('.multibox-col .box-height').css('height', imgHight);

	
	if($(window).width() > 640){
		$('.header-left-bottom li').hover(function() {
          $(this).addClass('highlight');
	  	},
		function(){
		  $(this).removeClass('highlight');
		});	
	}

	//equal hight block
 
	function equalHeight(group) {
		var tallest = 0;
		group.each(function() {
			var thisHeight = $(this).height();
			if(thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.height(tallest);
	}
	
		equalHeight($(".col-4-container .teaser-item h4"));
		equalHeight($(".col-4-footer .teaser-item"));
		
		
  // responsive 
	$(".header-left-bottom .menu-icon").click(function(){
		$(".header-left-bottom ul.main-menu").slideToggle();	
	});
	

	
	$('.multibox-col .vertical img').parents('.vertical').find('.block > .csc-textpic').unwrap();


	if($(window).width() < 641){
		$('.news-block .col').wrapAll('<div class="extra-wrapper"></div>').wrapAll('<ul class="bxslider"></ul>').wrap('<li></li>');
		$('ul.main-menu li.drop a').click(function(e) {
			$(this).next().slideToggle();
			e.preventDefault();
		});

		$('.footer-top .box.left').insertAfter('.footer-top .box.right')
	};

	//$('.bxslider').bxSlider();
        
       
    //magnific popup

	 jQuery.extend(true, jQuery.magnificPopup.defaults, {  
	     iframe: {
	         patterns: {
	            youtube: {
	               index: 'youtube.com/', 
	               id: 'v=', 
	               src: 'https://www.youtube.com/embed/02k0G9bO8RA' 
	           }
	         }
	     }
	 });


	 jQuery('a.popup').magnificPopup({
	         disableOn: 700,
	         type: 'iframe',
	         mainClass: 'mfp-fade',
	         removalDelay: 160,
	         preloader: false,
	         fixedContentPos: true,
	         titleSrc: 'title'

	     });

        // Even Odd class for section title
        $ ('.section-toggle:even').addClass ('even');
        $ ('.section-toggle:odd').addClass ('odd');
        

        // Even Odd class for section content
        $ ('.section-toggle .section-content .multibox-row:even').addClass ('even');
        $ ('.section-toggle .section-content .multibox-row:odd').addClass ('odd');

        // Lightbox Gallery
        $(".hide").click(function(){
            $(".lightboxgallery").hide();
        });
        $(".show").click(function(){
            $(".lightboxgallery").show();
        });
        $('#galleryslides').superslides({
            play: 5000,
            //animation_speed: 6000,
            hashchange: false
        });



 var slideridCount = 0;
jQuery('.full-container').each(function() {
   jQuery(this).attr('id', 'Bigslider' + slideridCount);
   slideridCount++;
   
});
  var sliderid = 1;
  $('.scroll-top a').attr('href', '#Bigslider0');
  $('.scroll-bottom a').attr('href', '#Bigslider' + sliderid);
  $('.scroll-bottom a').click(function(e){
	if(sliderid < jQuery('.full-container').length - 1)
    sliderid++;    
	$('.scroll-bottom a').attr('href', '#Bigslider' + sliderid);
	//document.URL = $('.scroll-bottom a').attr('href');
	var target = $(this.hash);
	if (target.length) {
		$('html,body').animate({
		scrollTop: target.offset().top
		}, 1000); 
	}
	e.preventDefault();
  });
  $('.scroll-top a').click(function(e){
    if(sliderid > 0)
    sliderid--;
	$('.scroll-top a').attr('href', '#Bigslider' + sliderid);
	//document.URL = $('.scroll-top a').attr('href');
	var target = $(this.hash);
	if (target.length) {
		$('html,body').animate({
		scrollTop: target.offset().top
		}, 1000); 
	}
	e.preventDefault();
  });






	});


$(window).resize(function() {
	var imgHight = $('.box-height .vertical img').height();
	 $('.multibox-col .box-height').css('height', imgHight);

});