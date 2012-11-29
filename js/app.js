(function() {

	$('#js-zoom-in').click(function() {
		$('body').css('font-size', '200%');
	});

	$('#js-high-contrast').click(function() {
		$('body').addClass('high-contrast');
	});

	// Sync Heights of Columns
	// @TODO window resize
	$('.allergies .headline .panel, .allergies .content').syncHeight();
	// $(window).resize(function(){
	// $('p').syncHeight();
	// });

}());