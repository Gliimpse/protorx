(function() {

	$("#js-tour-page").click(function() {
		$('#joyRideContent').joyride({});
	});

	$('#js-zoom-in').click(function() {
		$('body').css('font-size', '200%');
	});

	$('#js-high-contrast').click(function() {
		$('body').addClass('high-contrast');
	});

	// Sync Heights of Columns
	// @TODO window resize
	$('.allergies .headline .panel, .allergies .listing').syncHeight();
	// $(window).resize(function(){
	// $('p').syncHeight();
	// });

}());