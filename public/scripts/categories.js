export class Category {
    constructor(n, d) {
        this.name = n;
        this.description = d;
    }

    render() {
        let board = document.querySelector('.board');
        let div =   `<div class="cat" draggable="true">
                        <p>Name: ${this.name}</p>
                        <p>Description: ${this.description}</p>
                        <div class="list">
                            <p>Tasks:</p>
                        </div>
                        <div class="catBtns">
                            <button class="taskBtn" >Add task</button>
                            <button class="removeCatBtn" >Remove</button>
                        <div/>
                    </div>`;
        board.innerHTML += div;
    }
}

