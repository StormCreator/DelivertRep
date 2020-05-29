$(document).ready(function(){
    $('.review__inner').slick({
        draggable: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"</button>',
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
        }

    ]
  });
});