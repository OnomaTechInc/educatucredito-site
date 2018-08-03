$(document).ready(function(){
    var widthbox = $(window).width();
    if(widthbox <= 991){
      $('.nav-item').on('click',function(){
            $('.navbar-toggler').trigger('click');
      })
    }
})
