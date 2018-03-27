'use strict';

(function () {
    var userDialog = document.querySelector('.setup');
    var userNAmeInput = userDialog.querySelector('.setup-user-name');

    userNAmeInput.addEventListener('invalid', function (evt) {
        if (userNAmeInput.validity.tooShort) {
            userNAmeInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
        } else if (userNAmeInput.validity.tooLong) {
            userNAmeInput.setCustomValidity('Имя не должно превышать 25 символов');
        } else if (userNAmeInput.validity.valueMissing) {
            userNAmeInput.setCustomValidity('Обязательное поле');
        } else {
            userNAmeInput.setCustomValidity('');
        }
    });
})();