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

  //scroll
    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    //for pageup scrolling
    $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
            $('.pageup').fadeIn();
        }else
            $('.pageup').fadeOut();
    });

    $('[data-modal=call-me]').on('click', function(){
        $('.overlay, #call_me').fadeIn('slow');
    });

    //for closing modal
    $('.modal__close').on('click', function() {
        $('.overlay, #call_me, #thanks').fadeOut('slow');
    });

    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "../mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('#call_me').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });

        return false;
    });
});
// navigation
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})