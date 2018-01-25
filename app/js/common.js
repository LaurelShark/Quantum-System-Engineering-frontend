$(function() {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'], 
		navbar:{
			title: '+38(093)462-50-33'
		},
		/*navbar:{
			title: 'Our cuisine'
		},*/
		offCanvas: {
			position: 'right'
		}
	});

var api = $('#my-menu').data('mmenu');

api.bind('open:finish', function() {
	$('.hamburger').addClass('is-active');	
});
api.bind('close:finish', function() {
	$('.hamburger').removeClass('is-active');	
});

$('.carousel-services').on('initialized.owl.carousel', function(){
	setTimeout(function(){
		carouselService()
	}, 100);
	
});

$('.carousel-services').owlCarousel({
	loop: true,
	nav: true,
	smartSpeed: 700,
	dots: false,
	navText: ['<i class="fa fa-arrow-circle-left"></i>', '<i class="fa fa-arrow-circle-right"></i>'],
	responsiveClass: true, 
	responsive: {
		0: {
			items: 1
		}, 
		800: {
			items: 2
		}, 
		1100: {
			items: 3		
		}
	}
});


function carouselService(){
	$('.carousel-services-item').each(function(){
		var ths  = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
	})
}carouselService();

//Resize Window
function onResize(){
	$('.carousel-services-content').equalHeights();
}onResize();
window.onresize = function() {onResize()};
});