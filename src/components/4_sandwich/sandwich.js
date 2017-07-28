$(window).ready(function() {
    $('.sandwich').click(function(){
        $(this).parent().toggleClass('active');
    });
});
