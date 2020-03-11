$(window).on(
	'load',
	function() {
		newsHeight();
	}
);

$(window).resize(
	function() {
		newsHeight();
	}
);

function newsHeight() {
	var currentHeight = 0;
	var maxHeight = 0;

	$('#section--page--main--news .tabs .tab-content > div').each(
		function() {
			currentHeight = $(this).height();
			if (currentHeight >= maxHeight) {
				maxHeight = currentHeight;
			}
		}
	);

	$('#section--page--main--news .tabs .tab-content').height(maxHeight + 'px');
}