$(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });

    $('.slider_main').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
    $('.reviews_slider').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    function menuActive(el,elHide,speed) {
        el.click(function () {
            var $this = $(this);
            var product_menu_item = el;
            product_menu_item.removeClass('active');
            $this.addClass('active');
            if (!$(this).next().is(':visible')) {
                elHide.slideUp(speed);
            }
            else{
                product_menu_item.removeClass('active');
            }
            $this.next().stop(true, true).slideToggle(speed);
        });
    };

    function menuActiveUp(el,elHide,speed) {
        el.click(function () {
            var $this = $(this);
            var product_menu_item = el;
            product_menu_item.removeClass('active_st');
            $this.addClass('active_st');
            if (!$(this).prev().is(':visible')) {
                elHide.slideUp(speed);
            }
            else{
                product_menu_item.removeClass('active_st');
            }
            $this.prev().stop(true, true).slideToggle(speed);
        });
    };

    menuActive($('.product_menu_item'),$('ul.product_menu_sub'),300);
    menuActive($('.menu_mobile_item'),$('ul.menu_mobile_upper'),100);
    menuActiveUp($('.direction_link_st'),$('.sub_menu'),100);
    $('.upper_show').hover(function () {
        $(this).find('a.header_menu_link').toggleClass('upper_active');
        $(this).find('.menu_upper').stop(true, true).fadeToggle(100);
    });
    // $('.menu_upper .direction_link').hover(function () {
    //     $(this).find('.sub_menu').stop(true, true).fadeToggle(100);
    // });
    $('.menu_upper .direction_link').each(function () {
      if(!$(this).children('.sub_menu').length > 0){
          $(this).find('.direction_link_st').remove();
      }
    });
    $('.js-menu-mobile').click(function () {
        $('.menu_mobile_fon').fadeIn(100);
        $('.menu_mobile').fadeIn(200);
    });
    $('ul.tabs_caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
    });

    function tableScroll() {
        const window_width = $(window).width();
        if(window_width <= 1100){
            $('.tabs').width(parseInt(Math.round(window_width)) - 30);
        }
    }
    tableScroll();
    $(window).resize(function () {
        tableScroll();
    });
    $('.js-popup-order').bind('click', function(e) {
        var href = window.location.href;
        console.log(href);
        e.preventDefault();
        $('.popup-order').bPopup({
            modalColor: '#394555',
            opacity: 0.9,
            easing: 'easeInOutCirc',
            speed: 600,
            transition: 'slideIn'
        });
    });

    $('.js-popup-count').bind('click', function(e) {
        var href = window.location.href;
        console.log(href);
        e.preventDefault();
        $('.popup-count').bPopup({
            modalColor: '#394555',
            opacity: 0.9,
            easing: 'easeInOutCirc',
            speed: 600,
            transition: 'slideIn'
        });
    });

    $('.js-popup-usluga').bind('click', function(e) {
        var href = window.location.href;
        console.log(href);
        e.preventDefault();
        $('.popup-usluga').bPopup({
            modalColor: '#394555',
            opacity: 0.9,
            easing: 'easeInOutCirc',
            speed: 600,
            transition: 'slideIn'
        });
    });

    $(document).on('af_complete', function(event,res) {
        if(res.success){
            setTimeout(function () {
                $('.ajax').html("<h2>Спасибо за заявку</h2>  " +
                    "<div class='text_center'>Мы отправили информацию нашему сотруднику." +
                    " Ожидайте, менеджер свяжется с вами в ближайшее время! " +
                    "<img src='../assets/images/form_s.jpg'/>" +
                    "</div>");
            },300)
            setTimeout(function () {
                $('.b-close').click();
                window.location.reload();
            },2000)

        }
    });

    $(".product_menu_sub_link").click(function(){
        var id = ($(this).attr('id'));
        $.ajax({
            type: "POST",
            url: "content.html",
            data: "id="+id,
            success: function(content){
                $("#content").html(content);
            }
        });
    });

    $('.js-show-hit').click(function (event) {
        $('.hide_hit').fadeIn(300);
        $(this).hide();
        event.preventDefault();
    });

});
