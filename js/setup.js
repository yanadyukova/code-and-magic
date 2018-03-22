'use strict'

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

var setProperty = function (arr) {
    return arr[Math.floor(Math.random()*arr.length)];
};

var initialWizard = function (wizard) {
    wizard.name = setProperty(names) + ' ' + setProperty(surnames);
    wizard.coatColor = setProperty(coatColors);
    wizard.eyesColor = setProperty(eyesColors);
}

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

userDialog.classList.remove('hidden');
