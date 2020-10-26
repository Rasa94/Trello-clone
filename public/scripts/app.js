import { Category } from "./categories.js";
import { Task } from "./tasks.js"
import { getDragAfterElement } from "./dragFunctions.js"


let board = document.querySelector('.board');
let addCatPop = document.querySelector('.newCatPopNone');
let addCatButton = document.getElementById('addNewCatBtn');
let newTaskPop = document.querySelector('.newTaskPopNone');
let taskInput = document.querySelector('.taskInput');
let confirmCatBtn = document.getElementById('confirmCatBtn');
let confirmTaskBtn = document.getElementById('confirmTaskBtn');
let name = document.getElementById('nameInput');
let description = document.getElementById('descInput');

        // Pop up windows and item adding

addCatButton.addEventListener('click', (e) => {
    e.preventDefault();
    addCatPop.classList.toggle('newCatPop');
})

confirmCatBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let cat = new Category(name.value, description.value);
    cat.render();
    addCatPop.classList.toggle('newCatPop');
    name.value = '';
    description.value = '';
})

let listLocation;

board.addEventListener('click', (e) => {
    e.preventDefault();
    listLocation = e.target.parentNode.previousElementSibling; 
    if (e.target.className == 'taskBtn') {
        newTaskPop.classList.toggle('newTaskPop');
    }
})

confirmTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let task = new Task(taskInput.value);
    task.render(listLocation);
    newTaskPop.classList.toggle('newTaskPop');
    taskInput.value = '';
})

        // Category and item removal 

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.classList.contains('removeItemBtn')) {
        e.target.parentNode.remove();    
    } else if(e.target.classList.contains('removeCatBtn')) {
        e.target.parentNode.parentNode.remove();   
    }
}, true);


        // Drag and drop events

let listElement;
let catElement;

document.querySelector('body').addEventListener('drag', (e) => {
    e.preventDefault();
    if ( e.target.classList.contains('listItem') ) {
        e.preventDefault();
        listElement = e.target;
    } else if ( e.target.classList.contains('cat') ) {
        e.preventDefault();
        catElement = e.target;
    }
    console.log(e.target);

}, true);

// Insertion of elements based on the type (horizontal/vertical)

let insertion = (type, elementTarget, afterElement) => {
    if (afterElement == null && afterElement != undefined) {                  
        elementTarget.append(type);
    } else {
        elementTarget.insertBefore(type, afterElement);
    }
}

document.querySelector('body').addEventListener('dragover', (e) => {
    e.preventDefault();
    let overCoordinatesY = e.clientY;
    let overCoordinatesX = e.clientX;
    let afterEl;

    if ( e.target.classList.contains('list') ) {
        afterEl = getDragAfterElement(overCoordinatesY, 'y');
        insertion(listElement, e.target, afterEl);
    } else if ( e.target.classList.contains('board') ) {
        afterEl = getDragAfterElement(overCoordinatesX, 'x');
        insertion(catElement, e.target, afterEl);
    }
}, true);


