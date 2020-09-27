export class Category {
    constructor(n, d) {
        this.name = n;
        this.description = d;
    }

    render() {
        let board = document.querySelector('.board');
        let div = document.createElement("DIV");
        div.className = 'cat';
        let namePar = document.createTextNode(`Name: ${this.name}`);
        div.appendChild(namePar);
        let descPar = document.createTextNode(`Description: ${this.description}`);
        div.appendChild(descPar);
        let btn = document.createElement('BUTTON');
        btn.innerText = 'Add task';
        btn.className = 'taskBtn'
        div.appendChild(btn);
        let list = document.createElement('DIV');
        list.className = "list";
        list.innerText = 'Tasks:'
        div.appendChild(list);
        board.appendChild(div);
    }
}

