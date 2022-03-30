const container = document.querySelector('.container');

const grid = (16);

const createSquares = (grid) => {
    const squareSize = 960 / grid;
    for (let i = 0; i < (grid*grid); i++) {
        const square = document.createElement('div');

        square.classList.add('square'); 

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        container.appendChild(square);

        square.addEventListener('mouseover', (e) => {
            //console.log(e.target);
            square.classList.add('active');
        });
        //console.log('square created');
    }
};

createSquares(grid);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const cleanBoard = document.querySelector('.clean');
cleanBoard.addEventListener('click', () => {
    let boardSize = prompt("Enter the board resolution (max: 100):");
    if (boardSize <= 0 || boardSize > 100) {
        alert("Enter a number between 0-100");
    } else if (isNaN(boardSize)) {
        alert("Please enter a number");
    } else {
        removeAllChildNodes(container);
        createSquares(boardSize);
    }
});
