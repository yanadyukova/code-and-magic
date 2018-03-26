'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fareballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizards = [];

var setProperty = function (arr) {
    return arr[Math.floor(Math.random()*arr.length)];
};

var initialWizard = function (wizard) {
    wizard.name = setProperty(names) + ' ' + setProperty(surnames);
    wizard.coatColor = setProperty(coatColors);
    wizard.eyesColor = setProperty(eyesColors);
};

var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    return wizardElement;
};

for (i = 0; i < 4; i++) {
    wizards[i] = {};
    initialWizard(wizards[i]);
}

var userDialog = document.querySelector('.setup');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i ++) {
    fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

var setupClose = userDialog.querySelector('.setup-close');
var setupOpen = document.querySelector('.setup-open-icon');

setupClose.addEventListener('click', function () {
    userDialog.classList.add('hidden');
});

setupOpen.addEventListener('click', function () {
    userDialog.classList.remove('hidden');
});

setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
        userDialog.classList.remove('hidden');
    }
});

setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        userDialog.classList.add('hidden');
    }
});

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

var wizardCoat = userDialog.querySelector('.wizard-coat');
var wizardEye = userDialog.querySelector('.wizard-eyes');
var fareball = userDialog.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = setProperty(coatColors);
});
wizardEye.addEventListener('click', function () {
    wizardEye.style.fill = setProperty(eyesColors);
});
fareball.addEventListener('click', function () {
    fareball.style.background = setProperty(fareballColors);
});

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