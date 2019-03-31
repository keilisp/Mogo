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
});