'use strict';

(function () {

    //Отрисовка похожих персонажей

    var wizards = [];

    var initialWizard = function (wizard) {
        wizard.name = window.util.setProperty(window.util.names) + ' ' + window.util.setProperty(window.util.surnames);
        wizard.coatColor = window.util.setProperty(window.util.coatColors);
        wizard.eyesColor = window.util.setProperty(window.util.eyesColors);
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

})();