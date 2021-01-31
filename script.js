//one of something = Module - two of something == factory

let board = ["", "", "", "", "", "", "", "", ""];
const squares = Array.from(document.querySelectorAll('.square'));
const message = document.querySelector('h2');
const x = document.querySelector('#X');
const o = document.querySelector('#O');
let playerMarker = "";
let computerMarker = "";
let counter = 0;
let winner = null;

let player1 = "Player 1"
let player2 = "Player 2"

const p1Name = document.querySelector("#p1Name");
const p2Name = document.querySelector("#p2Name");

p1Name.addEventListener('input', function(e) {
  if (p1Name != "") {
    player1 = p1Name.value;
  } else player1 = "Player 1"
})

p2Name.addEventListener('input', function(e) {
  if (p2Name != "") {
    player2 = p2Name.value;
  } else player2 = "Player 2"
})

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

function addListeners() {
  for (const square of squares) {
    square.addEventListener('click', marker)
  }
}

x.addEventListener('click', () => {
  hideBtns();
  playerMarker = "X";
  computerMarker = "O";
  message.innerHTML = `${player1}'s turn:`;
  addListeners();
})

o.addEventListener('click', () => {
  hideBtns();
  playerMarker = "O";
  computerMarker = "X";
  addListeners();
  computerPlay();
});

function hideBtns(){
  o.style.display = "none";
  x.style.display = "none";
}

function computerPlay() {
  let random = Math.floor((Math.random() * 9));
  if (board[random] == "") {
    if (counter % 2 == 0 && computerMarker == "X") {
      board[random] = "X";
      squares[random].innerHTML = "X";
      updateTurn();
      checkWin();
    } else if (counter % 2 == 1 && computerMarker == "O") {
      if (board[random] == "") {
        board[random] = "O";
        squares[random].innerHTML = "O";
        updateTurn();
        checkWin();
      }
    }
  } else if (counter < 9) computerPlay();
}

function marker(e) {
  let id = squares.findIndex(function(square) {
    return square === event.target;
  });

  if (this.innerHTML != "") {
    return
  } else if (counter % 2 == 0) {
    board[id] = "X";
    this.innerHTML = board[id];
    updateTurn();
    checkWin();
    if (winner == null) setTimeout(computerPlay, 250)
  } else {
    board[id] = "O";
    this.innerHTML = board[id];
    updateTurn();
    checkWin();
    if (winner == null) setTimeout(computerPlay, 250)
  }
};

function updateTurn() {
  if (counter % 2 == 0) {
    message.innerHTML = `${player2}'s turn:`;
    counter++;
  } else {
    message.innerHTML = `${player1}'s turn:`;
    counter++;
  }
}

const resetButton = document.querySelector(".reset")
resetButton.addEventListener('click', function(e) {
  for (i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  };
  counter = 0;
  message.innerHTML = "Pick a side"
  winner = null;
  if(p1Name & p2Name != ""){
    player1 = p1Name.value;
    player2 = p2Name.value;
  }
  o.style.display = "block";
  x.style.display = "block";
  return board = ["", "", "", "", "", "", "", "", ""]
});
