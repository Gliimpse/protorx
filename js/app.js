(function() {


	$('#js-zoom-in').click(function() {
		$('body').css('font-size', '200%');
	});

	$('#js-high-contrast').click(function() {
		$('body').addClass('high-contrast');
	});

     $(window)
        .sausage({
            content: function (i, $page) {
                return '<span class="sausage-span">' + $page.find('section').first().text() + '</span>';
            }
        })
        ;

}());