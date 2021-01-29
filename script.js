//one of something = Module - two of something == factory
//const gameBoard = () => {

// };

let board = ["", "", "", "", "", "", "", "", ""];
let turn = "player1";
const squares = Array.from(document.querySelectorAll('.square'));
const message = document.querySelector('h2');
// const squares = document.querySelectorAll(".square")

//Game Logic

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
  ]

  let winner = null;

  winningCombos.forEach(function(combo, index) {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]])
      winner = board[combo[0]];
  });
  if (winner != null) {
    message.innerHTML = `${winner} won the game!`;
    for (const square of squares) {
      square.removeEventListener('click', marker)
    }
    return console.log(winner);
  } else if (counter == 9) {
    message.innerHTML = `It's a tie!`;
  }
};


//Game Board
let counter = 0

function addListeners(){
  for (const square of squares) {
  square.addEventListener('click', marker)
}
}
addListeners();

function marker(e) {
  let id = squares.findIndex(function(square) {
    return square === event.target;
  });

  if (this.innerHTML != "") {
    return
  } else if (turn == "player1") {
    this.innerHTML = "X";
    board[id] = "X";
    message.innerHTML = "Player 2's turn:"
    counter++;
    checkWin();
    return turn = "player2"
  } else {
    this.innerHTML = "O";
    board[id] = "O";
    message.innerHTML = "Player 1's turn:"
    counter++;
    checkWin();
    return turn = "player1";
  }
};

const resetButton = document.querySelector(".reset")
resetButton.addEventListener('click', function(e) {
  for (i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  };
  counter = 0;
  message.innerHTML = "Player 1's turn:"
  addListeners();
  return board = ["", "", "", "", "", "", "", "", ""]
});
