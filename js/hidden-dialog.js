'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setupWindow = document.querySelector('.setup');
  var setupOpenButton = document.querySelector('.setup-open');
  var setupCloseButton = document.querySelector('.setup-close');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupUserName = document.querySelector('.setup-user-name');

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
      };

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

  toogleHiddenSetup();

})();
