'use strict';

(function () {
    var shopElement = document.querySelector('.setup-artifacts-shop');
    var artifactsElement = document.querySelector('.setup-artifacts');
    var basket = document.querySelector('.setup-artifacts-delete');
    var draggedItem = null;

    shopElement.addEventListener('dragstart', function (evt) {
        if (evt.target.tagName.toLowerCase() === 'img') {
            draggedItem = evt.target.cloneNode(true);
            evt.dataTransfer.setData('text/plain', evt.target.alt);
        }
    });

    artifactsElement.addEventListener('dragstart', function (evt) {
        if (evt.target.tagName.toLowerCase() === 'img') {
            draggedItem = evt.target;
            evt.dataTransfer.setData('text/plain', evt.target.alt);
        }
    });

    artifactsElement.addEventListener('dragover', function (evt) {
        evt.preventDefault();
        return false;
    });

    artifactsElement.addEventListener('drop', function (evt) {
        evt.target.style.outline = '';
        evt.target.style.backgroundColor = '';

        if (evt.target.children.length === 0 && !(evt.target.tagName.toLowerCase() === 'img')) {
            evt.target.appendChild(draggedItem);
        }

        evt.preventDefault();
    });

    artifactsElement.addEventListener('dragenter', function (evt) {

        if (evt.target.children.length === 0 && !(evt.target.tagName.toLowerCase() === 'img')) {
            evt.target.style.outline = '2px dashed red';
            evt.target.style.backgroundColor = 'lightyellow';
        }

        evt.preventDefault();
    });

    artifactsElement.addEventListener('dragleave', function (evt) {
        evt.target.style.outline = '';
        evt.target.style.backgroundColor = '';
        evt.preventDefault();
    });

    basket.addEventListener('dragover', function (evt) {
        evt.preventDefault();
        return false;
    });

    basket.addEventListener('drop', function (evt) {
        evt.target.appendChild(draggedItem);
        evt.target.removeChild(draggedItem);
        evt.preventDefault();
    });

})();