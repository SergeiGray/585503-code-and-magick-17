'use strict';

(function () {
  document.querySelector('.setup').classList.remove('hidden');

  var QUANTITY_CHARACTERS = 4;
  var NAME_CHARACTERS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAME_CHARACTERS = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var propertiesCharacters = []

  var getPropertiesCharacters = function () {
    for (var i = 0; i < QUANTITY_CHARACTERS; i++) {
      var name = NAME_CHARACTERS[Math.floor(Math.random() * NAME_CHARACTERS.length)] + ' ' + SURNAME_CHARACTERS[Math.floor(Math.random() * SURNAME_CHARACTERS.length)];
      var coatColor = COATS_COLORS[Math.floor(Math.random() * COATS_COLORS.length)];
      var eyesColor = EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)];
      console.log(coatColor);
      propertiesCharacters[i] = [
      {
        name: name
      }, {
        coatColor: coatColor
      }, {
        eyesColor: eyesColor
      }];
    }
  }();




})();
