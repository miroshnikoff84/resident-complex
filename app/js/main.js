$(function () {
    $('.menu__list-item').on('click', function () {

        $('.menu__list-item.menu__list-item--active').removeClass('menu__list-item--active');
        $(this).addClass('menu__list-item--active');
    })

    $('#overlay-show').on('click', function () {
        $('.overlay').removeClass('overlay-hidden');
        $('.menu__list-item.menu__list-item--active').removeClass('menu__list-item--active');

    })
    
    $('.modal__close').on('click', function () {
        $('.overlay').addClass('overlay-hidden');
        $('.menu__list-item.menu__list-item--active').removeClass('menu__list-item--active');
        $('#first-item').addClass('menu__list-item--active');
    })



})