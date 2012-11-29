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


	$('.lab-result.closed').live(
		'click', function() {
			$(this).removeClass('closed').addClass('open');
			$(this).children('.row').slideDown();
			$(this).find('.graph-result-label').css('display', 'block');
		}
	);


	$('.lab-result.open').live(
		'click', function() {
			$(this).removeClass('open').addClass('closed');
			$(this).children('.row').slideUp();
			$(this).find('.graph-result-label').css('display', 'none');
		}
	);

	// Sync Heights of Columns
	// @TODO window resize
	$('.allergies .headline .panel, .allergies .listing').syncHeight();
	$('.labs .headline .panel, .labs .content-container').syncHeight();
	// $(window).resize(function(){
	// $('p').syncHeight();
	// });

}());