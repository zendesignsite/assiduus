$(window).on('load', function() {
	$('#section--page--main--slider .container-fluid > .row').flickity({
		autoPlay: true,
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: false
	});
});