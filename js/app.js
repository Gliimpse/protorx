(function() {

     $(window)
        .sausage({
            content: function (i, $page) {
                return '<span class="sausage-span">' + $page.find('section').first().text() + '</span>';
            }
        })
        ;

}());