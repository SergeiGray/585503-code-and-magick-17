'use strict';

(function () {

  var setupDialogElement = document.querySelector('.setup');
  var pinForMovingDialog = setupDialogElement.querySelector('.upload');
  var artifactInShop = document.querySelector('.setup-artifacts-cell').querySelector('img');

  var doMovingItem = function (movingPin, movableSpace) {
    movingPin.addEventListener('mousedown', function (evt) {
      evt.preventDefault();


      if (!(getComputedStyle(movableSpace).position === 'absolute')) {
        movableSpace.style.position = 'absolute';
      }

      if (!(getComputedStyle(movableSpace).zIndex < 1 || getComputedStyle(movableSpace).zIndex === 'none')) {
        movableSpace.style.zIndex = 1;
      }

      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      var dragged = false;

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        dragged = true;

        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        movableSpace.style.top = (movableSpace.offsetTop - shift.y) + 'px';
        movableSpace.style.left = (movableSpace.offsetLeft - shift.x) + 'px';

      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        if (dragged) {
          var onClickPreventDefault = function (clickEvt) {
            clickEvt.preventDefault();

            movingPin.removeEventListener('click', onClickPreventDefault);
          };
          movingPin.addEventListener('click', onClickPreventDefault);
        }

      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  };

  doMovingItem(pinForMovingDialog, setupDialogElement);
  doMovingItem(artifactInShop, artifactInShop);

})();
