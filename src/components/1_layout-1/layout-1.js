
var $win = $(window);

$win.ready(function() {

    function get_win_height (a) {

        var win_w = $win.width();
        var win_h = $win.height();

        $(a).height(win_h);
    }

    get_win_height ('section');

    $win.resize(function(){
        get_win_height ('section');
    });
});
