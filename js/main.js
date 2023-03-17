$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrowR.svg" alt="arrow-right">',
        nextArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrowL.svg" alt="arrow-left">',
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.menu-btn').on('click', function() {
        $('.menu__list').toggleClass('active');
    });
});

