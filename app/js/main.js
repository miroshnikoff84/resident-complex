$(function () {

    var currentFloor = 2;
    var currentApart = 1;

    var floor = $('.canvas path');
    var btnUp = $('.btn-up');
    var btnDown = $('.btn-down');
    var apart = $('.floor-layout__inner path');
    var apartLink = $('.choice-apart__link');
    var apartList = $('.number-apart');
    var count = 0;
    var numberApart = 0;

    $('.menu__list-item').on('click', function () {
        $('.menu__list-item.menu__list-item--active').removeClass('menu__list-item--active');
        $(this).addClass('menu__list-item--active');
    });

    floor.on('mouseover', function () {
        floor.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.number-floor').text(currentFloor);

    });

    btnUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
            $('.number-floor').text(usCurrentFloor);
            floor.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    btnDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
            $('.number-floor').text(usCurrentFloor);
            floor.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    $('.overlay-show').on('click', function () {
        $('.overlay').removeClass('d-hidden');
        $('.modal').removeClass('d-hidden');
        $('.floor-layout__title').text('Этаж ' + currentFloor);

        numberApart = (Number(currentApart) + currentFloor * 10) - 10;
        console.log(numberApart);
        console.log(currentFloor);
        count = numberApart;
        $.each(apartList, function () {
            $(this).text(count);
            count++;
        });

    });

    $('.close').on('click', function () {
        $('.overlay').addClass('d-hidden');
        $('.modal').addClass('d-hidden');
        apart.removeClass('current-apart');
        
    });



    apartLink.on('mouseover', function () {
        apart.removeClass('current-apart');
        usCurrentApart = '';
        currentApart = $(this).attr('data-apart');
        usCurrentApart = currentApart.toString();
        $(`[data-apartpath=${usCurrentApart}]`).toggleClass('current-apart');
    });

    apart.on('mouseover', function () {
        apart.removeClass('current-apart');
        usCurrentApart = '';
        currentApart = $(this).attr('data-apartpath');
        usCurrentApart = currentApart.toString();
        $(`[data-apartpath=${usCurrentApart}]`).toggleClass('current-apart');

    });

});