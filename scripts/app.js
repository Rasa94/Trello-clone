import { Category } from "./categories.js";
import { Task } from "./tasks.js"

let b = document.querySelector('.board');
let addCatPop = document.querySelector('.newCatPopNone');
let addCatButton = document.getElementById('addNewCatBtn');
let newTaskPop = document.querySelector('.newTaskPopNone');
let taskInput = document.querySelector('.taskInput');
let confirmCatBtn = document.getElementById('confirmCatBtn');
let confirmTaskBtn = document.getElementById('confirmTaskBtn');
let name = document.getElementById('nameInput');
let description = document.getElementById('descInput');


addCatButton.addEventListener('click', (e) => {
    e.preventDefault();
    addCatPop.classList.toggle('newCatPop');
})

confirmCatBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let cat = new Category(name.value, description.value);
    cat.render();
    addCatPop.classList.remove('newCatPop');
    addCatPop.classList.add('newCatPopNone');
})

let ev;

b.addEventListener('click', (e) => {
    e.preventDefault();
    ev = e.target.nextElementSibling 
    if(e.target.className == 'taskBtn') {
        newTaskPop.classList.toggle('newTaskPop');
    }
})

let dragE;

confirmTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let task = new Task(taskInput.value);
    task.render(ev);
    newTaskPop.classList.toggle('newTaskPop');

})


let element;

document.querySelector('body').addEventListener('drag', (evt) => {
    // Do some check on target
    if ( evt.target.classList.contains('listItem') ) {
        // DO CODE
        evt.preventDefault();
        element = evt.target;
        // console.log(evt.target)
    }
}, true);

document.querySelector('body').addEventListener('dragover', (evt) => {
    // Do some check on target
    evt.preventDefault();

}, true);

document.querySelector('body').addEventListener('drop', (evt) => {
    // Do some check on target
    if ( evt.target.classList.contains('list') ) {
        // DO CODE
        evt.target.append(element)
        console.log(evt.target)
        element = null;
    }
}, true);


