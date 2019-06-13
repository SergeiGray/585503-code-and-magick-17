'use strict';

(function () {
  document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');

  var QUANTITY_CHARACTERS = 4;
  var NAME_CHARACTERS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAME_CHARACTERS = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var propertiesCharacters = [];
  var characters = [];

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

  getPropertiesCharacters();
  doDomElements();
  getEductionDomElements();

})();
