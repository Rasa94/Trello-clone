export class Task {
    constructor(t) {
        this.name = t;
    }

    render(location) {
        let div = document.createElement('DIV');
        div.setAttribute("draggable", "true")
        div.className = "listItem"
        let taskPar = document.createTextNode(this.name);
        div.appendChild(taskPar);
        location.appendChild(div);
    }
}