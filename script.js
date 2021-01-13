//one of something = Module - two of something == factory
//const gameBoard = () => {

// };

const board = ["", "", "", "", "", "", "", "", ""];
let turn = "player1"
const squares = Array.from(document.querySelectorAll('.square'));
// const squares = document.querySelectorAll(".square")

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 6],
    [2, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
  ]

  let winner = null;

  winningCombos.forEach(function(combo, index) {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]])
      winner = board[combo[0]];
  });
  return winner;
};

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
      checkWin();
      return turn = "player2"
    } else {
      this.innerHTML = "O";
      board[id] = "O";
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
  return board = ["", "", "", "", "", "", "", "", ""]
});
