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
    nextArrow: $('.reviews__buttons-next')
  });

  $('.reviews__slider--youtube').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.reviews__buttons--youtube-prev'),
    nextArrow: $('.reviews__buttons--youtube-next')
  });

  $('.says__slider').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.says__buttons-prev'),
    nextArrow: $('.says__buttons-next')
  });

  $('.cars__tabs .tab').click(function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.cars__tab').removeClass('active');
    $('.cars__tab[data-tab="' + $(this).text() + '"]').addClass('active');
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

    var scrollTop     = $(window).scrollTop(),
    elementOffset = $('.header__numbers').offset().top,
    distance      = (elementOffset - scrollTop);
    console.log(distance);
    
    if(distance <= -50) {
      $('.header__menu').addClass('sticky');
    } else {
      $('.header__menu').removeClass('sticky');
      $('body').removeClass('sticky');
    }
  });

  $('#scrollToTop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '700');
  });

});

