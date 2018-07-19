(function($) {
    var $window = $(window),
        $html = $('#space');

    $window.resize(function resize() {
        if ($window.width() <= 767-17 && $window.width() >= 741-17) {
            $html.removeClass('strategy-container-addclass');
            return $html.addClass('strategy-container-new');
        }

        $html.removeClass('strategy-container-new');
        $html.addClass('strategy-container-addclass');
    }).trigger('resize');
})(jQuery);
