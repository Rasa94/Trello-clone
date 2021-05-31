import { getDragAfterElement } from "./dragFunctions.js";
import "./modals.js";
import "./backgrounds.js"; 


        // Insertion function 

let insertion = (type, elementTarget, afterElement) => {
    if (afterElement == null && afterElement != undefined) {                  
        elementTarget.append(type);
    } else {
        elementTarget.insertBefore(type, afterElement);
    }
};

        // Drag and drop events

let listElement;
let containerElement;

document.querySelector('body').addEventListener('dragstart', e => {
    if ( e.target.classList.contains('listItem')) {
        listElement = e.target;

        listElement.classList.add('dragging');
    } else if ( e.target.classList.contains('cat')) {
        containerElement = e.target;

        containerElement.classList.add('dragging');
    }
});

document.querySelector('body').addEventListener('dragover', e => {
    let overCoordinatesY = e.clientY;
    let overCoordinatesX = e.clientX;
    let afterEl;

    console.log(overCoordinatesY);

    
    if (e.target.classList.contains('list') && listElement.classList.contains('dragging')) {
        afterEl = getDragAfterElement(overCoordinatesY, 'y');
        insertion(listElement, e.target, afterEl);
    } else if ( e.target.classList.contains('board') && containerElement.classList.contains('dragging')) {
        afterEl = getDragAfterElement(overCoordinatesX, 'x');
        insertion(containerElement, e.target, afterEl);
    } else {
        
    }
}, true);

document.querySelector('body').addEventListener('dragend', e => {
    if (e.target.classList.contains('listItem')) {
        listElement.classList.remove('dragging');
    } else if (e.target.classList.contains('cat')) {
        containerElement.classList.remove('dragging');

    }
});