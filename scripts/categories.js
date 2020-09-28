export class Category {
    constructor(n, d) {
        this.name = n;
        this.description = d;
    }

    render() {
        let board = document.querySelector('.board');
        let div =   `<div class="cat">
                        <p>Name: ${this.name}</p>
                        <p>Description: ${this.description}</p>
                        <div class="list">
                            <p>Tasks:</p>
                        </div>
                        <button class="taskBtn" >Add task</button>
                    </div>`;
        board.innerHTML += div;
    }
}

