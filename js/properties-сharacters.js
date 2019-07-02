'use strict';

(function () {

  window.propertiesCharacters = [];

  var QUANTITY_CHARACTERS = 4;
  var NAME_CHARACTERS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAME_CHARACTERS = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  window.COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  window.getRandomNumber = function (max) {
    return Math.floor(Math.random() * max);
  };

  var getPropertiesCharacters = function () {
    for (var i = 0; i < QUANTITY_CHARACTERS; i++) {

      window.propertiesCharacters[i] = {
        name: NAME_CHARACTERS[window.getRandomNumber(NAME_CHARACTERS.length - 1)] + ' ' + SURNAME_CHARACTERS[window.getRandomNumber(SURNAME_CHARACTERS.length - 1)],
        coatColor: window.COATS_COLORS[window.getRandomNumber(window.COATS_COLORS.length - 1)],
        eyesColor: window.EYES_COLORS[window.getRandomNumber(window.EYES_COLORS.length - 1)]
      };
    }

  };

  getPropertiesCharacters();

})();
