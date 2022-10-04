$(function () {
    $('.menu__list-item').click(function() {
        var id = $(this).attr('data-tab');
   
   $('.menu__list-item.menu__list-item--active').removeClass('menu__list-item--active');
   $(this).addClass('menu__list-item--active'); 
   })
})