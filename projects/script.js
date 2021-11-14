$(window).scroll(function(){
    var offset = window.pageYOffset;
    $('#project-title').css('transform','translateX(-50%) translateY('+0.5 * offset+'px)')
})