$(document).ready(function(){
    $('.review__inner').slick({
        draggable: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"</button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            
            // {
            //   breakpoint: 1008,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            //   }
            // },
            // {
            //   breakpoint: 800,
            //   settings: "unslick"
            // }

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

    //for modal closing
    $('.modal__close').on('click', function(){
        $('.overlay, #call-me, #thanks').fadeOut('slow');
    });

    //for modal opening
    $('[data-modal=call-me]').on('click', function(){
        $('.overlay, #call-me').fadeIn('slow');
    });

    //for card sliding
    function toggleSlide(item)
    {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.price__item-content').eq(i).toggleClass('price__item-content-active');
                $('.price__item-list').eq(i).toggleClass('price__item-list-active');
            })
        })
    }

    toggleSlide('.price__button');
    toggleSlide('.button_back');


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
});