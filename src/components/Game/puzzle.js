

const game = () => {
    const isStart = window.confirm('Wanna begin new game?');

    if (isStart === true) {
        console.log('Welcome to the game :)');

    // const box = document.createElement('div');
    // box.classList.add("playField");
    // document.body.appendChild(box);
    // const emptyCell = document.createElement('div');
    // emptyCell.classList.add('emptyCell');
    // box.appendChild(emptyCell);

    // let createCell = () => {
    //     let cellBox = document.querySelector('.playField');

    //     for ( let i = 0; i < 15; i++ ) {
    //         let cell = document.createElement('div');
    //         cell.classList.add('cell');
    //         cell.innerHTML = i + 1;
    //         cell.id = cell.innerHTML;
    //         cell.style.order = cell.id;
    //         cellBox.appendChild(cell);
    //     }

    //     const newOrder = Array.from(box.getElementsByTagName('div'));
    //     newOrder.sort(()=>Math.random() - 0.5); 
    //     console.log(newOrder);
        
    //     cellBox.innerHTML = '';
        
    //     for (let i = 0; i < newOrder.length; i++) {
    //         let el = newOrder[i];
    //         el.style.order = i + 1;
    //         cellBox.appendChild(el);
    //         el.addEventListener('click', e => {
    //             let newOrderValue = Number(window.getComputedStyle(emptyCell).order);
    //             emptyCell.style.order = e.target.style.order;
    //             el.style.order = newOrderValue;
    //         });
    //     }
    // }

    // createCell();

    } else {
        console.log('You refused :(');

        const message = document.createElement('h1');
        message.classList.add("refused");
        message.innerHTML = "You refused :(";
        document.body.appendChild(message);
    }
}


export default game;
