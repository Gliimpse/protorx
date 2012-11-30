(function() {

	// Trigger tooltips
	$("[rel=tooltip]").tooltip();

	$('.graph-horizontal-labels').hide();

	$("#js-tour-page").click(function() {
		$('#joyRideContent').joyride({});
	});

	$('#js-zoom-in').click(function() {
		$('body').css('font-size', '200%');
	});

	$('#js-high-contrast').click(function() {
		$('body').addClass('high-contrast');
	});

	// Show fixed nav bar
	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();
		if (scrollPos > 250) {
			$('.fixed-header').fadeIn();
		}
		else {
			$('.fixed-header').hide();
		}
	});

	// Timeline events
	$('.timeline-event').each(function() {
		$(this).addClass('closed');
	});

	$('.timeline-event.closed a.summary').live(
		'click', function() {
			$(this).parent().find('.detail').slideDown();
			$(this).parent().addClass('open');
			//$('.conditions .headline .panel, .conditions .timeline').syncHeight();
			return false;
		}
	);

	$('.timeline-event.open a.summary').live(
		'click', function() {
			$(this).parent().find('.detail').slideUp();
			$(this).parent().removeClass('open');
			//$('.conditions .headline .panel, .conditions .timeline').syncHeight();
			return false;
		}
	);


	// Expand and collapse lab results
	// This was done really quickly while layout was changing rapidly
	// Requires refactoring with object literals and functions
	$('.lab-result.closed').live(
		'click', function() {
			$(this).removeClass('closed').addClass('open');
			$(this).children('.row').slideDown();
			$(this).find('.graph-result-label').css('display', 'block');
			$(this).find('.graph-horizontal-labels').show();
			var horizontalLabelHeight = $('.graph-horizontal-labels').height();
			$(this).find('.graph-horizontal').css('margin-top', horizontalLabelHeight + 'px');
			$(this).find('.graph-horizontal-labels').css('top', '-' + horizontalLabelHeight + 'px');
			$(this).find('.graph-horizontal-labels li').syncHeight();

		}
	);

	$('.lab-result.open').live(
		'click', function() {
			$(this).removeClass('open').addClass('closed');
			$(this).children('.row').slideUp();
			$(this).find('.graph-result-label').css('display', 'none');
			$(this).find('.graph-horizontal-labels').hide();
			$(this).find('.graph-horizontal').css('margin-top', '0');
		}
	);

	// Sync Heights of Columns
	// @TODO window resize
	$('.allergies .headline .panel, .allergies .listing').syncHeight();
	$('.labs .headline .panel, .labs .content-container').syncHeight();
	$('.encounters .headline .panel, .encounters .content').syncHeight();
	$('.medications .headline .panel, .medications .content').syncHeight();
	$('.vaccinations .headline .panel, .vaccinations .content').syncHeight();
	$('.conditions .headline .panel, .conditions .timeline').syncHeight();

	// $(window).resize(function(){
	// $('p').syncHeight();
	// });

}());