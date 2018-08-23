// Main
console.log('FullStack Vietnam!')
$(document).ready(function () {
	$(".home_slider .owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		responsiveClass:true,
		responsive : {
			768 : {
				dots: true,
				nav: true,
			}
		}
	});

	$(".home_trademark .owl-carousel").owlCarousel({
		items: 2,
		loop: true,
		dots: false,
		nav: true,
		margin: 5,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsiveClass:true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive : {
			480 : {
				items: 3,
				margin: 10,
			},
			768 : {
				items: 4,
			},
			992 : {
				items: 6,
				nav: true,
			}
		}
	});
});
