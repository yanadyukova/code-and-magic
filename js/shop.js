'use strict';

(function () {
    var shopElement = document.querySelector('.setup-artifacts-shop');
    var draggedItem = null;

    shopElement.addEventListener('dragstart', function (evt) {
        if (evt.target.tagName.toLowerCase() === 'img') {
            draggedItem = evt.target;
            evt.dataTransfer.setData('text/plain', evt.target.alt);
        }
    });

    var artifactsElement = document.querySelector('.setup-artifacts');

    artifactsElement.addEventListener('dragover', function (evt) {
        evt.preventDefault();
        return false;
    });

    artifactsElement.addEventListener('drop', function (evt) {
        evt.target.style.outline = '';
        evt.target.style.backgroundColor = '';
        evt.target.appendChild(draggedItem.cloneNode(true));
        evt.preventDefault();
    });

    artifactsElement.addEventListener('dragenter', function (evt) {
        evt.target.style.outline = '2px dashed red';
        evt.target.style.backgroundColor = 'lightyellow';
        evt.preventDefault();
    });

    artifactsElement.addEventListener('dragleave', function (evt) {
        evt.target.style.outline = '';
        evt.target.style.backgroundColor = '';
        evt.preventDefault();
    });
})();