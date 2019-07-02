'use strict';

(function () {

  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardCoatInput = document.querySelector('#wizard-coat-input');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardEyesInput = document.querySelector('#wizard-eyes-input');
  var fireball = document.querySelector('.setup-fireball');
  var fireballWrap = document.querySelector('.setup-fireball-wrap');
  var fireballInput = document.querySelector('#setup-fireball-wrap-input');

  var changeColorWizardCoat = function () {
    wizardCoat.addEventListener('click', function () {
      var color = window.COATS_COLORS[window.getRandomNumber(window.COATS_COLORS.length)];
      wizardCoat.style.fill = color;
      wizardCoatInput.setAttribute('value', color);
    });
  };

  var changeColorWizardEyes = function () {
    wizardEyes.addEventListener('click', function () {
      var color = window.EYES_COLORS[window.getRandomNumber(window.EYES_COLORS.length)];
      wizardEyes.style.fill = color;
      wizardEyesInput.setAttribute('value', color);
    });
  };

  var changeColorWizardFireball = function () {
    fireball.addEventListener('click', function () {
      var color = WIZARD_FIREBALL_COLOR[window.getRandomNumber(WIZARD_FIREBALL_COLOR.length)];
      fireballWrap.style.backgroundColor = color;
      fireballInput.setAttribute('value', color);
    });
  };

  changeColorWizardCoat();
  changeColorWizardEyes();
  changeColorWizardFireball();

})();
