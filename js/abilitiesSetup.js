$(function () {

  selectAbility();
  showAbilityDemo();

  function selectAbility() {

    $('.aIcon').click(function () {
      $('.aIcon').css('border', 'none');
      $(this).css('border', '1px solid goldenrod');
    });

    $('.aIcon').eq(0).click();
  };

  function showAbilityDemo() {

    $('.aIcon').click(function () {
      var iconPos = $(this).index();
      $('.abilitiesInfoWrapper').css('display', 'none');
      $('.abilitiesInfoWrapper').eq(iconPos).css('display', 'flex');
    });

    $('.aIcon').eq(0).click();
  };

});