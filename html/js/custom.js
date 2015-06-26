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
    mobMenu();
});

$(window).resize(function(event) {
	mobMenu();
});