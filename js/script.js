$(function () {

  $('.sliderWrapper').slick({
    arrows: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    swipeToSlide: true
  });

  showMenu();
  selectSkin();

  function showMenu() {
    $('.overlayContainer').click((e) => {
      e.stopPropagation();
    });

    $('.overlayMenu').click(function () {
      $('.overlayContainer').slideToggle(200);
    })

    $('.overlayMobileMenu div a').click(function () {
      $('.overlayContainer').slideToggle(200);
    })
  };

  function selectSkin() {

    $('.splashIcon').click(function () {
      $('.splashIcon').css('box-shadow', 'none');
      $(this).css('box-shadow', '0 0 1pt 1pt goldenrod').css('transition', '500ms');

      var img = $(this).css('background-image');
      $('.individualSplash').css('background-image', img);
    });

    $('.splashIcon').eq(0).click();
  };
  
	// Remove the Timeout method
  setTimeout(function() {
    // Clear the Hash
    window.location.hash="";

    // Scroll to top of the Page
    $([document.documentElement, document.body]).animate({
      scrollTop: 0
    }, 0);
  }, 500)
});