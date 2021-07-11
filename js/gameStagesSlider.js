$(function () {

  var curIndex = 0;
  var amt;

  initSlider();
  selectSlide();

  function initSlider() {
    amt = $('.gameplayWrapper').length;
    var sizeContainer = 100 * amt;
    var sizeBoxSingle = 100 / amt;

    $('.gameplayWrapper').css('width', `${sizeBoxSingle}%`);
    $('.gameStages').css('width', `${sizeContainer}%`);

    //fazendo o Slider
    for (var i = 0; i < amt; i++) {
      if (i == 0) {
        $('.gameStagesBullets').append('<span style="background-color: goldenrod;"></span>');
      } else {
        $('.gameStagesBullets').append('<span></span>');
      }
    }
  };

  function selectSlide() {

    $('.gameStagesBullets span').click(function () {
      curIndex = $(this).index();
      goToSlider(curIndex);
    });
  }

  function goToSlider(curIndex) {
    var offSetX = $('.gameplayWrapper').eq(curIndex).offset().left - $('.gameStages').offset().left;

    $('.gameStagesBullets span').css('background-color', 'transparent');
    $('.gameStagesBullets span').eq(curIndex).css('background-color', 'goldenrod');

    $('.gameplayContainer').stop().animate({
      'scrollLeft': offSetX + 'px'
    });
  }

  $(window).resize(function () {
    $('.gameplayContainer').stop().animate({
      'scrollLeft': goToSlider(curIndex)
    });
  });

})