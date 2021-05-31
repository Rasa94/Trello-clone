export class Category {
    constructor(n) {
        this.name = n;
    }

    render() {
        let board = document.querySelector('.board');
        let div =   `<div class="cat" draggable="true">
                        <p>Name: ${this.name}</p>
                        <p>Tasks:</p>
                        <div class="list">
                            
                        </div>
                        <div class="catBtns">
                            <button class="taskBtn" >Add task</button>
                            <button class="removeCatBtn" >Remove</button>
                        <div/>
                    </div>`;
        board.innerHTML += div;
    }
}

