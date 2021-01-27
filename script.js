//one of something = Module - two of something == factory
//const gameBoard = () => {

// };

let board = ["", "", "", "", "", "", "", "", ""];
let turn = "player1";
const squares = Array.from(document.querySelectorAll('.square'));
const message = document.querySelector('h2');
const cover = document.querySelector('#cover');
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
    cover.style.display = "flex";
    return console.log(winner);
  }
};


//Game Board

for (const square of squares) {
  square.addEventListener('click', function(e) {

    let id = squares.findIndex(function(square) {
      return square === event.target;
    });

    if (this.innerHTML != "") {
      return
    } else if (turn == "player1") {
      this.innerHTML = "X";
      board[id] = "X";
      message.innerHTML = "Player 2's turn:"
      checkWin();
      return turn = "player2"
    } else {
      this.innerHTML = "O";
      board[id] = "O";
      message.innerHTML = "Player 1's turn:"
      checkWin();
      return turn = "player1";
    }
  })
}

const resetButton = document.querySelector(".reset")
resetButton.addEventListener('click', function(e) {
  for (i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  };
  message.innerHTML = "Player 1's turn:"
  cover.style.display = "flex";
  return board = ["", "", "", "", "", "", "", "", ""]
});
