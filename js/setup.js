'use strict'

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var setProperty = function (arr) {
    return arr[Math.floor(Math.random()*arr.length)];
};
var wizards = [];

for (i = 0; i < 4; i++) {
    // var name = setProperty(names) + ' ' + setProperty(surnames);
    var coatColor = setProperty(coatColors);
    var eyesColor = setProperty(eyesColors);
    wizards[i].name = setProperty(names) + ' ' + setProperty(surnames);
    wizards[i].coatColor = coatColor;
    wizards[i].eyesColor = eyesColor;
}

// var wizards = [
//     {
//         name : setProperty(names) + ' ' + setProperty(surnames),
//         coatColor : setProperty(coatColors),
//         eyesColor : setProperty(eyesColors)
//     },
//     {
//         name : setProperty(names) + ' ' + setProperty(surnames),
//         coatColor : setProperty(coatColors),
//         eyesColor : setProperty(eyesColors)
//     },
//     {
//         name : setProperty(names) + ' ' + setProperty(surnames),
//         coatColor : setProperty(coatColors),
//         eyesColor : setProperty(eyesColors)
//     },
//     {
//         name : setProperty(names) + ' ' + setProperty(surnames),
//         coatColor : setProperty(coatColors),
//         eyesColor : setProperty(eyesColors)
//     }
// ];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

    return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i ++) {
    fragment.appendChild(renderWizard(wizard[i]));
}

similarListElement.appendChild(fragment);
