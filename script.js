const DisplayController = (() => {
    const board = document.getElementById('gameboard');
    const clear = document.getElementById('clear');
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell'
            board.appendChild(cell);
        }
}
})();

//     return {makeMove, clearBoard}
// }


// function Gameboard() {
//     const rows = 3;
//     const columns = 3;
//     const board = [];

//     for (let i = 0; i < rows; i++) {
//         board[i] = [];
//         for (let j = 0; j < columns; j++) {
//             board[i][j] = 0;
//         }
//     }
// }

// function Player() {
//     return {symbol, move}
// }


// function Game() {
    
// }

// function checkGameOver(player) {
//     if ((board[0][0] === player && board[0][1] === player && board[0][2] === player) ||
//         (board[1][0] === player && board[1][1] === player && board[1][2] === player) ||
//         (board[2][0] === player && board[2][1] === player && board[2][2] === player) ||
//         (board[0][0] === player && board[1][0] === player && board[2][0] === player) ||
//         (board[0][1] === player && board[1][1] === player && board[2][1] === player) ||
//         (board[0][2] === player && board[1][2] === player && board[2][2] === player) ||
//         (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
//         (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
//             console.log("THERE IS A WINNER");
//         }
//         else {
//             for (let i = 0; i < rows; i++) {
//                 for (let j = 0; j < columns; j++) {
//                     if (board[i][j] === 0) {
//                         console.log(`[${i}][${j}] is 0. Game still on`);
//                     }
//                     else {
//                         console.log("IT'S A TIE");
//                         break
//                 }
//             }
//         }
//     }
// }