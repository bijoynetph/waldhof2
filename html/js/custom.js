function mobMenu(){
	var winWidth = $(window).width();
	if (winWidth > 640) {
		$('.mobileNav').hide();
	};
}
$(document).ready(function() {
	var mobNav = $('nav.mainMenu').clone().addClass('mobileNav').removeClass('mainMenu');
	$('nav.mainMenu').after(mobNav);
	$('.mobileNav .leftSec, .mobileNav .blLogo').remove();
	$('.mobileNav ul li a span').prepend('» ');
	$('nav.mainMenu .megaMenu .rightSec ul li:odd').addClass('evenMenu');
	$('.logo').before('<span class="mobileIcon"></span>');
	$(document).on('click', '.mobileIcon', function() {
		$('nav.mobileNav').slideToggle(500);
	});
	$('.mobileNav ul li a').click(function () {
        if ($(this).closest('li').children('.megaMenu').is(':hidden') == true) {
            $(this).closest('li').children('.megaMenu').slideDown(500);
            return false
        }
    });
    var mobAdd = $('.address').clone().html();
    $('.logo').after('<div class="mobAddress">'+mobAdd+'</div>');

    $('.tabsection ul.tabs').each(function() {
    	$(this).find('li').each(function(index, el) {
    		$(this).addClass('ba'+index);
    	});
    });

	$(function() {
	    $(".tabsection").each(function() {
	        var i = $(this),
	            a = i.find(".tablist"),
	            t = i.find(".tabcontainer");
	        a.find("li").removeClass("activeTab"), a.find("li:first").addClass("activeTab"), t.find(".tabBox").fadeOut(), t.find(".tabBox:first").fadeIn(), a.find("a").click(function(i) {
	            i.preventDefault()
	        }), a.find("li").click(function() {
	            if (!$(this).hasClass("activeTab")) {
	                var i = $(this).index();
	                a.find("li").removeClass("activeTab"), $(this).addClass("activeTab"), t.find(".tabBox").hide(), t.find(".tabBox:eq(" + i + ")").fadeIn()
	            }
	        })
	    })
	});

	$('.full-container .toggle-control').click(function(event) {
		$(this).closest('.full-container').siblings().find('.toggle-control .arrow-dn').removeClass('opened');
		$(this).closest('.full-container').siblings().find('.section-content').slideUp(400);
		$(this).find('.arrow-dn').toggleClass('opened');
		$(this).closest('.section-title').next('.section-content').slideToggle(400);

		var imgHight = $('.box-height .block-img img').height();
		$('.multibox-col .box-height').css('height', imgHight);
	});

	$('.fixed-navigation ul li a').each(function(index, el) {
		var title = $(this).attr('title');
		if (title) {
			$(this).hover(function() {
				$(this).data('tipText', title).removeAttr('title');
				$(this).after('<p class="tooltip">'+title+'</p>').fadeIn(400);
			}, function() {
				$(this).attr('title', $(this).data('tipText'));
				$('.tooltip').remove();
			});
		};
			
	});

    mobMenu();
});

$(window).resize(function(event) {
	mobMenu();

	var imgHight = $('.box-height .block-img img').height();
	$('.multibox-col .box-height').css('height', imgHight);
});