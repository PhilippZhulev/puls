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

$(window).ready(function() {

    $("section").mCustomScrollbar();

    function get_offset(a, b) {
        $(document).scroll(function(){

            var this_scroll = $(this).scrollTop();

            if(this_scroll >= a.offset().top + b) {
                a.trigger('on.scroll.event');
            }else {
                a.trigger('off.scroll.event');
            }

        });
    }

    var scr_obj_1 = $('.layout-2');

    get_offset(scr_obj_1, 0)

    scr_obj_1.on('on.scroll.event', function(){
        $('.mobile-block').addClass('_scroll-event');
    });
    scr_obj_1.on('off.scroll.event', function(){
        $('.mobile-block').removeClass('_scroll-event');
    });


    $('.sandwich__menu__nav li a').click(function(){
        var scroll_elem = $(this).attr('href');
        if ($(scroll_elem).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_elem).offset().top}, 300);
            $('.sandwich__menu__nav li').removeClass('active');
            $(this).parent().addClass('active');

            var nav_li = $('.sandwich__menu__nav li');

        }
        return false;
    });
});
