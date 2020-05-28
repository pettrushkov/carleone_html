jQuery(document).ready(function($) {
    
  $('select').niceSelect();

  $('.banner__slider').slick({
    arrows: true,
    dots: true,
    prevArrow: $('.banner__buttons-prev'),
    nextArrow: $('.banner__buttons-next')
  });

  $('.cars__tabs .tab').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.cars__tab').removeClass('active');
    $('.cars__tab[data-tab="' + $(this).text() + '"]').addClass('active');
  });

});

