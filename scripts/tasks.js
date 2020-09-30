export class Task {
    constructor(t) {
        this.name = t;
    }

    render(location) {
        let div = document.createElement('DIV');
        div.setAttribute("draggable", "true")
        div.className = "listItem";
        let taskPar = document.createTextNode(this.name);
        let removeButton = document.createElement('BUTTON');
        removeButton.innerHTML = "X";
        removeButton.classList.add('removeItemBtn')
        div.appendChild(taskPar);
        div.appendChild(removeButton);
        location.appendChild(div);
    }
}