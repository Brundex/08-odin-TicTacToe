let winner = "NO WINNER"
const rows = 3;
const columns = 3;  
const board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

let currentPlayer = "X";

function togglePlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }
}

function ScreenController() {
    const clear = document.getElementById('clear');
    const cell = document.querySelectorAll('.cell');
    const declareTurn = document.querySelector('#declare-turn');

    clear.addEventListener('click', clearBoard);

    cell.forEach(item => {
        item.addEventListener('click', () => {
            if (item.innerHTML === "X" || item.innerHTML === "O") {
                return
            }
            if (winner === "THERE IS A WINNER"){
                return
            }
            const i = parseInt(item.id.charAt(0));
            const j = parseInt(item.id.charAt(1));          

            board[i][j] = currentPlayer;
            item.innerHTML = currentPlayer;
            if (checkGameOver(currentPlayer) === true) {
                declareTurn.innerHTML = `${currentPlayer} WINS. GAME OVER`;
                return
            }
            togglePlayer();
            declareTurn.innerHTML = `${currentPlayer}'S TURN`; 
                     
        }
        )});
    

    function clearBoard() {
        cell.forEach(item => {
            item.innerHTML = "";
        });

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                board[i][j] = 0;
            }
        }
        currentPlayer = "X";
        declareTurn.innerHTML = `X'S TURN`;
    }     
    
    return {
        clear,
        cell,
    }
};

function checkGameOver(player) { 
    if ((board[0][0] === player && board[0][1] === player && board[0][2] === player) ||
        (board[1][0] === player && board[1][1] === player && board[1][2] === player) ||
        (board[2][0] === player && board[2][1] === player && board[2][2] === player) ||
        (board[0][0] === player && board[1][0] === player && board[2][0] === player) ||
        (board[0][1] === player && board[1][1] === player && board[2][1] === player) ||
        (board[0][2] === player && board[1][2] === player && board[2][2] === player) ||
        (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
            alert(`${player} WINS!`);
            winner = "THERE IS A WINNER";
            return true
        }
    else if (checkTie() === true) {
        alert("IT'S A TIE");
    }
}

function checkTie() {
    return board.every(row => row.every(cell => cell !== 0));
}

ScreenController();
