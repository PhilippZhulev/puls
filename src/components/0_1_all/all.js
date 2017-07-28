$(window).ready(function() {
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
});
