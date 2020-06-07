jQuery(document).ready(function($) {
    
  $('select').niceSelect();

  $('.banner__slider').slick({
    arrows: true,
    dots: true,
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

  $('.cars__tabs .tab').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.cars__tab').removeClass('active');
    $('.cars__tab[data-tab="' + $(this).text() + '"]').addClass('active');
  });

  $('.top10__question').click(function() {
    $(this).parent().toggleClass('active');
    $(this).next().slideToggle();
  });

});

