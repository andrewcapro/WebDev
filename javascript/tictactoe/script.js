// player factory function
const createPlayer = (name, marker) => {
    return {name, marker};
}
let board = [];
for (i = 0; i < 9; i++) {
    board.push('');
}

// gameboard object
const gameBoard = (() => {

    // generate board array
    let board = [];
    for (i = 0; i < 9; i++) {
        board.push('');
    }

    // return
    return {
        board
    };
})();

const game = (() => {
    const playerOne = createPlayer('Player 1', 'x');
    const playerTwo = createPlayer('Player 2', 'o');

    let ongoing = false;

    while(ongoing = false){
        let p1 = prompt("pick a space 0-8");
        if(board[p1] == ''){
            board[p1] = playerOne.marker;
        }
        else{
            let p1 = prompt("pick a space 0-8");
        }
        if(board[5] == playerOne.marker){
            ongoing = true;
        }
        console.log(board);
        let p2 = prompt("pick a space 0-8");
        if(board[p2] == ''){
            board[p2] = playerTwo.marker;
        }
        else{
            let p2 = prompt("pick a space 0-8");
        }
        console.log(board);
    }
    return {
        board
    };
})();

