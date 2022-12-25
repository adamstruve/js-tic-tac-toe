function start() {
  var board = ["", "", "", "", "", "", "", "", ""];

  var currentPlayer = "X";

  // Listen for clicks to any of the cells
  for (var i = 0; i < 9; i++) {
    var cell = document.getElementById("cell-" + i);
    cell.addEventListener("click", function (event) {
      // Get the cell that was clicked
      var cell = event.target;

      // If the cell is already occupied, do nothing
      if (cell.innerHTML !== "") {
        alert("Can't do that!");
        return;
      }

      // Place the player's symbol in the cell
      cell.innerHTML = currentPlayer;

      // Update the board array
      board[cell.id.replace("cell-", "")] = currentPlayer;

      // Check for a winner
      if (checkWinner(board, currentPlayer)) {
        alert(currentPlayer + " wins!");
      }

      // Switch players
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    });
  }
}

// This function checks if there is a winner on the board
function checkWinner(board, player) {
  console.log("checking for a winrar");
  console.log(board);
  // Check rows
  for (var i = 0; i < 9; i += 3) {
    if (
      board[i] === player &&
      board[i + 1] === player &&
      board[i + 2] === player
    ) {
      return true;
    }
  }

  // Check columns
  for (var i = 0; i < 3; i++) {
    if (
      board[i] === player &&
      board[i + 3] === player &&
      board[i + 6] === player
    ) {
      return true;
    }
  }

  // Check diagonals
  if (board[0] === player && board[4] === player && board[8] === player) {
    return true;
  }
  if (board[2] === player && board[4] === player && board[6] === player) {
    return true;
  }

  return false;
}

// Start the game
start();
