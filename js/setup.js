'use strict';

(function () {

  document.querySelector('.setup-similar').classList.remove('hidden');

  var characters = [];

  var doDomElements = function () {
    var similarCharactersTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

    for (var i = 0; i < window.propertiesCharacters.length; i++) {
      var oneCharacters = similarCharactersTemplate.cloneNode(true);

      oneCharacters.querySelector('.setup-similar-label').textContent = window.propertiesCharacters[i].name;
      oneCharacters.querySelector('.wizard-coat').style.fill = window.propertiesCharacters[i].coatColor;
      oneCharacters.querySelector('.wizard-eyes').style.fill = window.propertiesCharacters[i].eyesColor;

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

  doDomElements();
  getEductionDomElements();

})();
