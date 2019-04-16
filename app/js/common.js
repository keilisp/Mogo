$(function () {
	$('.navigation__menu').slicknav({
		label: '',
		duration: 500,
		closeOnClick: true,
		duplicate: true
	});

	$('.photos__wrapper').sliphover({
		backgroundColorAttr: 'data-background'
	});

	$('.counter').countUp();

	$('.beefup').beefup();

	$(".owl-carousel").owlCarousel({
		items: 1,
		mouseDrag: false,
		dots: false,
		nav: true,
		loop: true,
	});

	$(document).ready(function () {
		$("#lightgallery").lightGallery();
	});
});