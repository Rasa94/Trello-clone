import { Category } from "./categories.js";
import { Task } from "./tasks.js";
 
let board = document.querySelector('.board');
let addCatPop = document.querySelector('.newCatPopNone');
let addCatButton = document.querySelector('.addNewCatBtn');
let newTaskPop = document.querySelector('.newTaskPopNone');
let taskInput = document.querySelector('.taskInput');
let confirmCatBtn = document.querySelector('.confirmCatBtn');
let confirmTaskBtn = document.querySelector('.confirmTaskBtn');
let name = document.getElementById('nameInput');


        // Pop up windows and item adding

addCatButton.addEventListener('click', (e) => {
    e.preventDefault();
    addCatPop.classList.toggle('newCatPop');
});

confirmCatBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let cat = new Category(name.value);
    cat.render();
    addCatPop.classList.toggle('newCatPop');
    name.value = '';
});

let listLocation;

board.addEventListener('click', (e) => {
    e.preventDefault();
    listLocation = e.target.parentNode.previousElementSibling; 
    if (e.target.className == 'taskBtn') {
        newTaskPop.classList.toggle('newTaskPop');
    }
});

confirmTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let task = new Task(taskInput.value);
    task.render(listLocation);
    newTaskPop.classList.toggle('newTaskPop');
    taskInput.value = '';
});

        // Category and item removal 

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.classList.contains('removeItemBtn')) {
        e.target.parentNode.remove();    
    } else if(e.target.classList.contains('removeCatBtn')) {
        e.target.parentNode.parentNode.remove();   
    }
}, true);