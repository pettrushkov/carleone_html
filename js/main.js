jQuery(document).ready(function ($) {



  $('select').niceSelect();



  $('.banner__slider').slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: $('.banner__buttons-prev'),
    nextArrow: $('.banner__buttons-next')
  });



  $('.reviews__slider').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.reviews__buttons-prev'),
    nextArrow: $('.reviews__buttons-next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: "unslick"
      }
    ]
  });



  $('.reviews__slider--youtube').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.reviews__buttons--youtube-prev'),
    nextArrow: $('.reviews__buttons--youtube-next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });



  $('.says__slider').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.says__buttons-prev'),
    nextArrow: $('.says__buttons-next'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });



  $('.cars__tabs .tab').click(function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.cars__tab').removeClass('active');
    $('.cars__tab[data-tab="' + $(this).text() + '"]').addClass('active');
  });


  $('.faq__question').click(function () {
    if ($(this).parent().siblings().hasClass('active')) {
      $('.faq__item.active .faq__answer').not($(this)).slideUp();
      $('.faq__item.active').not($(this)).removeClass('active');
    }
    $(this).parent().toggleClass('active');
    $(this).next().slideToggle();
  });



  $('.top10__question').click(function () {
    if ($(this).parent().siblings().hasClass('active')) {
      $('.top10__item.active .top10__answer').not($(this)).slideUp();
      $('.top10__item.active').not($(this)).removeClass('active');
    }
    $(this).parent().toggleClass('active');
    $(this).next().slideToggle();
  });



  $('.header__search').click(function () {
    $('.header__menu-search').addClass('active');
  });



  $('.header__menu-search-close').click(function () {
    $(this).parent().parent().removeClass('active');
  });



  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $('#scrollToTop').addClass('show');
    } else {
      $('#scrollToTop').removeClass('show');
    }

    var scrollTop = $(window).scrollTop(),
      elementOffset = $('.header__numbers').offset().top,
      distance = (elementOffset - scrollTop);
    console.log(distance);

    if ($(window).width() > 971) {
      if (distance <= -50) {
        $('.header__menu').addClass('sticky');
      } else {
        $('.header__menu').removeClass('sticky');
        $('body').removeClass('sticky');
      }
    }
  });



  $('#scrollToTop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '700');
  });



  $('.phone-mask').mask('+38(0ZZ)ZZZ-ZZZZ', { translation: { 'Z': { pattern: /[0-9]/, optional: true } } });

  $('.phone-mask').focus(function () {
    if ($(this).val() == "") {
      $(this).val('+38(0');
    }
  });

  $('form').submit(function (event) {
    if ($('.phone-mask').val() == '+38(0' || $('.phone-mask').val() == '' || $('.phone-mask').val().length < 16) {
      event.preventDefault();
      alert('Введите свой номер телефона!')
    }
  });



  $('.header__menu-btn').click(function () {
    $('.header__mobile-menu').toggleClass('active');
  });



  $('.header__mobile-menu-close').click(function () {
    $('.header__mobile-menu').removeClass('active');
  });


  $('.new-offers__slider').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.new-offers__slider-prev'),
    nextArrow: $('.new-offers__slider-next'),
    infinite: false,
    // responsive: [
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });


  $('.news-preview__slider').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.news-preview__slider-prev'),
    nextArrow: $('.news-preview__slider-next'),
    infinite: false,
    // responsive: [
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });



  $('.auto__slider').slick({
    asNavFor: '.auto__mini-slider',
    arrows: true,
    prevArrow: $('.auto__buttons-prev'),
    nextArrow: $('.auto__buttons-next'),
    // responsive: [
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });



  $('.auto__mini-slider').slick({
    asNavFor: '.auto__slider',
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    // responsive: [
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });


  

  $('.services__group a').click(function(e) {
    if($(this).parent().children().length > 1) {
      e.preventDefault();
      $(this).parent().toggleClass('active');
      $(this).parent().find('ul').slideToggle();
    }
  });

  $('.calculator__tabs li').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.calculator__row').hide();
    $('.calculator__row[data-raztamozhka="' + $(this).text() + '"]').show();
  });


});

