$(function () {

  var curIndex = 0;
  var amt;

  initSlider();
  autoPlay();
  selectSlide();

  function initSlider() {
    amt = $('.wrapper').length;
    var sizeContainer = 100 * amt;
    var sizeBoxSingle = 100 / amt;

    $('.wrapper').css('width', `${sizeBoxSingle}%`);
    $('.championSpecifications').css('width', `${sizeContainer}%`);

    //fazendo o Slider
    for (var i = 0; i < amt; i++) {
      if (i == 0) {
        $('.bullets').append('<span style="background-color: #183248;"></span>');
      } else {
        $('.bullets').append('<span></span>');
      }
    }
  };

  //player autómático do slider
  function autoPlay() {
    setInterval(() => {
      curIndex++;
      if (curIndex == amt) {
        curIndex = 0;
      }

      goToSlider(curIndex);
    }, 5000);
  };

  function selectSlide() {

    $('.bullets span').click(function () {
      curIndex = $(this).index();
      goToSlider(curIndex);
    });
  }

  function goToSlider(curIndex) {
    var offSetX = $('.wrapper').eq(curIndex).offset().left - $('.championSpecifications').offset().left;

    $('.bullets span').css('background-color', 'transparent');
    $('.bullets span').eq(curIndex).css('background-color', '#183248');

    $('.aboutContainer').stop().animate({
      'scrollLeft': offSetX + 'px'
    });
  }

  $(window).resize(function () {
    $('.aboutContainer').stop().animate({
      'scrollLeft': 0
    });
  });

})