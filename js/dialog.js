'use strict';

(function () {

    //Открытие/закрытие окна

    var KEYCODE_ENTER = 13;
    var KEYCODE_ESC = 27;

    var userDialog = document.querySelector('.setup');
    var setupClose = userDialog.querySelector('.setup-close');
    var setupOpen = document.querySelector('.setup-open-icon');

    var openPopup = function () {
        userDialog.classList.remove('hidden');
        document.addEventListener('keydown', onPopupEscPress);
    };

    var closePopup = function () {
        userDialog.classList.add('hidden');
        document.removeEventListener('keydown', onPopupEscPress);
    };

    var onPopupEscPress = function (evt) {
        if (evt.keyCode === KEYCODE_ESC) {
            closePopup();
        }
    };

    var onPopupEnterPress = function (evt) {
        if (evt.keyCode === KEYCODE_ENTER) {
            openPopup();
        }
    };

    setupOpen.addEventListener('click', function () {
        openPopup();
    });

    setupOpen.addEventListener('keydown', function (evt) {
        onPopupEnterPress(evt);
    });

    setupClose.addEventListener('click', function () {
        closePopup();
    });

    setupClose.addEventListener('keydown', function (evt) {
        onPopupEscPress();
    });

    //Настройка персонажа

    var wizardCoat = userDialog.querySelector('.wizard-coat');
    var wizardEye = userDialog.querySelector('.wizard-eyes');
    var fareball = userDialog.querySelector('.setup-fireball-wrap');

    wizardCoat.addEventListener('click', function () {
        wizardCoat.style.fill = window.util.setProperty(window.util.coatColors);
    });
    wizardEye.addEventListener('click', function () {
        wizardEye.style.fill = window.util.setProperty(window.util.eyesColors);
    });
    fareball.addEventListener('click', function () {
        fareball.style.background = window.util.setProperty(window.util.fareballColors);
    });

    //Перетаскивание окна

    var dialogHandle = userDialog.querySelector('.upload');

    dialogHandle.addEventListener('mousedown', function (evt) {
        evt.preventDefault();

        var startCoords = {
            x: evt.clientX,
            y: evt.clientY
        };

        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();

            var shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            };

            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };

            userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
            userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

})();