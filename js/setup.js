'use strict';

(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');

  var QUANTITY_CHARACTERS = 4;
  var NAME_CHARACTERS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAME_CHARACTERS = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var propertiesCharacters = [];
  var characters = [];
  var setupWindow = document.querySelector('.setup');
  var setupOpenButton = document.querySelector('.setup-open');
  var setupCloseButton = document.querySelector('.setup-close');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupUserName = document.querySelector('.setup-user-name');
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardCoatInput = document.querySelector('#wizard-coat-input');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardEyesInput = document.querySelector('#wizard-eyes-input');
  var fireball = document.querySelector('.setup-fireball');
  var fireballWrap = document.querySelector('.setup-fireball-wrap');
  var fireballInput = document.querySelector('#setup-fireball-wrap-input');

  var getRandomNumber = function (max) {
    return Math.floor(Math.random() * max);
  };

  var getPropertiesCharacters = function () {
    for (var i = 0; i < QUANTITY_CHARACTERS; i++) {

      propertiesCharacters[i] = {
        name: NAME_CHARACTERS[getRandomNumber(NAME_CHARACTERS.length - 1)] + ' ' + SURNAME_CHARACTERS[getRandomNumber(SURNAME_CHARACTERS.length - 1)],
        coatColor: COATS_COLORS[getRandomNumber(COATS_COLORS.length - 1)],
        eyesColor: EYES_COLORS[getRandomNumber(EYES_COLORS.length - 1)]
      };
    }

  };

  var doDomElements = function () {
    var similarCharactersTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

    for (var i = 0; i < propertiesCharacters.length; i++) {
      var oneCharacters = similarCharactersTemplate.cloneNode(true);

      oneCharacters.querySelector('.setup-similar-label').textContent = propertiesCharacters[i].name;
      oneCharacters.querySelector('.wizard-coat').style.fill = propertiesCharacters[i].coatColor;
      oneCharacters.querySelector('.wizard-eyes').style.fill = propertiesCharacters[i].eyesColor;

      characters[i] = oneCharacters;
    }
  };

  var getEductionDomElements = function () {
    var setupParentDiv = document.querySelector('.setup-similar-list');
    var setupDocumentFragment = document.createDocumentFragment();
    for (var i = 0; i < characters.length; i++) {
      setupDocumentFragment.appendChild(characters[i]);
    }

    setupParentDiv.appendChild(setupDocumentFragment);
  };

  var toogleHiddenSetup = function () {

    var setupOpenClickHandler = function () {
      setupWindow.classList.remove('hidden');
      doSetupClose();
    };

    var setupOpenKeyDownHandler = function () {
      setupOpenIcon.addEventListener('keydown', function (evt) {
        if (evt.keyCode === ENTER_KEYCODE) {
          setupWindow.classList.remove('hidden');
        }
      });
      doSetupClose();
    };


    var doSetupClose = function () {

      var setupCloseClickHandler = function () {
        setupCloseButton.addEventListener('click', function () {
          setupWindow.classList.add('hidden');
        });
      };

      var setupCloseKeyDownEcsHandler = function () {
        document.addEventListener('keydown', function (evt) {
          if (evt.keyCode === ESC_KEYCODE && document.activeElement !== setupUserName) {
            setupWindow.classList.add('hidden');
          }
        });
      }();

      var setupCloseKeyDownEnterHandler = function () {
        setupCloseButton.addEventListener('focus', function () {
          setupCloseButton.addEventListener('keydown', function (evt) {
            if (evt.keyCode === ENTER_KEYCODE) {
              setupWindow.classList.add('hidden');
            }
          });
        });
      };

      setupCloseClickHandler();
      setupCloseKeyDownEcsHandler();
      setupCloseKeyDownEnterHandler();

    };

    setupOpenButton.addEventListener('click', setupOpenClickHandler);
    setupOpenIcon.addEventListener('focus', setupOpenKeyDownHandler);
  };

  var changeColorWizardCoat = function () {
    wizardCoat.addEventListener('click', function () {
      var color = COATS_COLORS[getRandomNumber(COATS_COLORS.length)];
      wizardCoat.style.fill = color;
      wizardCoatInput.setAttribute('value', color);
    });
  };

  var changeColorWizardEyes = function () {
    wizardEyes.addEventListener('click', function () {
      var color = EYES_COLORS[getRandomNumber(EYES_COLORS.length)];
      wizardEyes.style.fill = color;
      wizardEyesInput.setAttribute('value', color);
    });
  };

  var changeColorWizardFireball = function () {
    fireball.addEventListener('click', function () {
      var color = WIZARD_FIREBALL_COLOR[getRandomNumber(WIZARD_FIREBALL_COLOR.length)];
      fireballWrap.style.backgroundColor = color;
      fireballInput.setAttribute('value', color);
    });
  };

  getPropertiesCharacters();
  doDomElements();
  getEductionDomElements();
  toogleHiddenSetup();
  changeColorWizardCoat();
  changeColorWizardEyes();
  changeColorWizardFireball();

})();
