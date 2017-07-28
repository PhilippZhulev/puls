var $win = $(window);

$win.ready(function() {
    setTimeout(function(){
        $('.title__big-text').toggleClass('loading')
    }, 1500);
    setTimeout(function(){
        $('.title__light-text').toggleClass('loading')
    }, 2000);
    setTimeout(function(){
        $('.app-block, .shareit, .copyright').removeClass('loading')
    }, 2800);
});
