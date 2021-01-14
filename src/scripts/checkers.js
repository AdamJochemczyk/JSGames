let board,
  cells,
  redsPieces,
  blacksPieces,
  redTurnText,
  blackTurnText,
  turn = false,
  redScore,
  blackScore,
  playerPieces,
  selectedPiece;

const removeCellOnClick = () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", cells[i].fn, false);
  }
};

const findPiece = (pieceId) => {
  return board.indexOf(parseInt(pieceId));
};

const changePlayer = () => {
  if (turn) {
    turn = false;
    redTurnText.style.color = "white";
    blackTurnText.style.color = "black";
  } else {
    turn = true;
    redTurnText.style.color = "black";
    blackTurnText.style.color = "white";
  }
  givePiecesEventListeners();
};

const checkForWin = () => {
  if (blackScore === 0) {
    redTurnText.style.color = "black";
    blackTurnText.style.display = "none";
    redTurnText.textContent = "RED WINS!";
  } else if (redScore === 0) {
    blackTurnText.style.color = "black";
    redTurnText.style.display = "none";
    blackTurnText.textContent = "BLACK WINS!";
  }
  changePlayer();
};

const removeEventListeners = () => {
  if (turn) {
    for (let i = 0; i < redsPieces.length; i++) {
      redsPieces[i].removeEventListener("click", getPlayerPieces);
    }
  } else {
    for (let i = 0; i < blacksPieces.length; i++) {
      blacksPieces[i].removeEventListener("click", getPlayerPieces);
    }
  }
  checkForWin();
};

const changeData = (indexOfBoardPiece, modifiedIndex, removePiece) => {
  board[indexOfBoardPiece] = null;
  board[modifiedIndex] = parseInt(selectedPiece.pieceId);
  if (turn && selectedPiece.pieceId < 12 && modifiedIndex >= 57) {
    document.getElementById(selectedPiece.pieceId).classList.add("king");
  }
  if (!turn && selectedPiece.pieceId >= 12 && modifiedIndex <= 7) {
    document.getElementById(selectedPiece.pieceId).classList.add("king");
  }
  if (removePiece) {
    board[removePiece] = null;
    if (turn && selectedPiece.pieceId < 12) {
      cells[removePiece].innerHTML = "";
      blackScore--;
    }
    if (!turn && selectedPiece.pieceId >= 12) {
      cells[removePiece].innerHTML = "";
      redScore--;
    }
  }
  resetSelectedPieceProperties();
  removeCellOnClick();
  removeEventListeners();
};

const makeMove = number => {
  document.getElementById(selectedPiece.pieceId).remove();
  cells[selectedPiece.indexOfBoardPiece].innerHTML = "";
  if (turn) {
    if (selectedPiece.isKing) {
      cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `
      <p class="red-piece king" id="${selectedPiece.pieceId}"></p>`;
      redsPieces = Array.from(document.querySelectorAll(".red-piece"));
    } else {
      cells[
        selectedPiece.indexOfBoardPiece + number
      ].innerHTML = `<p class="red-piece" id="${selectedPiece.pieceId}"></p>`;
      redsPieces = Array.from(document.querySelectorAll(".red-piece"));
    }
  } else {
    if (selectedPiece.isKing) {
      cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `
      <p class="black-piece king" id="${selectedPiece.pieceId}"></p>`;
      blacksPieces = Array.from(document.querySelectorAll(".black-piece"));
    } else {
      cells[
        selectedPiece.indexOfBoardPiece + number
      ].innerHTML = `<p class="black-piece" id="${selectedPiece.pieceId}"></p>`;
      blacksPieces = Array.from(document.querySelectorAll(".black-piece"));
    }
  }

  let indexOfPiece = selectedPiece.indexOfBoardPiece;
  if (number === 14 || number === -14 || number === 18 || number === -18) {
    changeData(indexOfPiece, indexOfPiece + number, indexOfPiece + number / 2);
  } else {
    changeData(indexOfPiece, indexOfPiece + number);
  }
};

const giveCellsClick = () => {
  if (selectedPiece.seventhSpace) {
    cells[selectedPiece.indexOfBoardPiece + 7].addEventListener(
      "click",
      cells[selectedPiece.indexOfBoardPiece + 7].fn=function () {
        makeMove(7);
      },
      false
    );
  }
  if (selectedPiece.ninthSpace) {
    cells[selectedPiece.indexOfBoardPiece + 9].addEventListener(
      "click",
      cells[selectedPiece.indexOfBoardPiece + 9].fn=function () {
        makeMove(9);
      },
      false
    );
  }
  if (selectedPiece.fourteenthSpace) {
    cells[selectedPiece.indexOfBoardPiece + 14].addEventListener(
      "click",
      cells[selectedPiece.indexOfBoardPiece + 14].fn=function () {
        makeMove(14);
      },
      false
    );
  }
  if (selectedPiece.eighteenthSpace) {
    cells[selectedPiece.indexOfBoardPiece + 18].addEventListener(
      "click",
      cells[selectedPiece.indexOfBoardPiece + 18].fn=function () {
        makeMove(18);
      },
      false
    );
  }
  if (selectedPiece.minusSeventhSpace) {
    cells[selectedPiece.indexOfBoardPiece - 7].addEventListener(
      "click",
      cells[selectedPiece.indexOfBoardPiece - 7].fn=function () {
        makeMove(-7);
      },false
    );
  }
  if (selectedPiece.minusNinthSpace) {
    cells[selectedPiece.indexOfBoardPiece - 9].addEventListener(
      "click",
      (cells[selectedPiece.indexOfBoardPiece - 9].fn = function () {
        makeMove(-9);
      }),
      false
    );
  }
  if (selectedPiece.minusFourteenthSpace) {
    cells[selectedPiece.indexOfBoardPiece - 14].addEventListener(
      "click",
      (cells[selectedPiece.indexOfBoardPiece - 14].fn = function () {
        makeMove(-14);
      }),
      false
    );
  }
  if (selectedPiece.minusEighteenthSpace) {
    cells[selectedPiece.indexOfBoardPiece - 18].addEventListener(
      "click",
      (cells[selectedPiece.indexOfBoardPiece - 18].fn = function () {
        makeMove(-18);
      }),
      false
    );
  }
};

const givePieceBorder = () => {
  if (
    selectedPiece.seventhSpace ||
    selectedPiece.ninthSpace ||
    selectedPiece.fourteenthSpace ||
    selectedPiece.eighteenthSpace ||
    selectedPiece.minusSeventhSpace ||
    selectedPiece.minusNinthSpace ||
    selectedPiece.minusFourteenthSpace ||
    selectedPiece.minusEighteenthSpace
  ) {
    document.getElementById(selectedPiece.pieceId).style.border =
      "3px solid green";
    giveCellsClick();
  } else {
    return;
  }
};

const checkPieceConditions = () => {
  if (selectedPiece.isKing) {
    givePieceBorder();
  } else {
    if (turn) {
      selectedPiece.minusSeventhSpace = false;
      selectedPiece.minusNinthSpace = false;
      selectedPiece.minusFourteenthSpace = false;
      selectedPiece.minusEighteenthSpace = false;
    } else {
      selectedPiece.seventhSpace = false;
      selectedPiece.ninthSpace = false;
      selectedPiece.fourteenthSpace = false;
      selectedPiece.eighteenthSpace = false;
    }
    givePieceBorder();
  }
};

const checkAvailableJumpSpaces = () => {
  if (turn) {
    if (
      board[selectedPiece.indexOfBoardPiece + 14] === null &&
      cells[selectedPiece.indexOfBoardPiece + 14].classList.contains(
        "noPieceHere"
      ) !== true &&
      board[selectedPiece.indexOfBoardPiece + 7] >= 12
    ) {
      selectedPiece.fourteenthSpace = true;
    }
    if (
      board[selectedPiece.indexOfBoardPiece + 18] === null &&
      cells[selectedPiece.indexOfBoardPiece + 18].classList.contains(
        "noPieceHere"
      ) !== true &&
      board[selectedPiece.indexOfBoardPiece + 9] >= 12
    ) {
      selectedPiece.eighteenthSpace = true;
    }
    if (
      board[selectedPiece.indexOfBoardPiece - 14] === null &&
      cells[selectedPiece.indexOfBoardPiece - 14].classList.contains(
        "noPieceHere"
      ) !== true &&
      board[selectedPiece.indexOfBoardPiece - 7] >= 12
    ) {
      selectedPiece.minusFourteenthSpace = true;
    }
    if (
      board[selectedPiece.indexOfBoardPiece - 18] === null &&
      cells[selectedPiece.indexOfBoardPiece - 18].classList.contains(
        "noPieceHere"
      ) !== true &&
      board[selectedPiece.indexOfBoardPiece - 9] >= 12
    ) {
      selectedPiece.minusEighteenthSpace = true;
    }
  } else {
    if (
      board[selectedPiece.indexOfBoardPiece + 14] === null &&
      cells[selectedPiece.indexOfBoardPiece + 14].classList.contains(
        "noPieceHere"
      ) !== true &&
      board[selectedPiece.indexOfBoardPiece + 7] < 12 &&
      board[selectedPiece.indexOfBoardPiece + 7] !== null
    ) {
      selectedPiece.fourteenthSpace = true;
    }
    if (
      board[selectedPiece.indexOfBoardPiece + 18] === null &&
      cells[selectedPiece.indexOfBoardPiece + 18].classList.contains(
        "noPieceHere"
      ) !== true &&
      board[selectedPiece.indexOfBoardPiece + 9] < 12 &&
      board[selectedPiece.indexOfBoardPiece + 9] !== null
    ) {
      selectedPiece.eighteenthSpace = true;
    }
    if (
      board[selectedPiece.indexOfBoardPiece - 14] === null &&
      cells[selectedPiece.indexOfBoardPiece - 14].classList.contains(
        "noPieceHere"
      ) !== true &&
      board[selectedPiece.indexOfBoardPiece - 7] < 12 &&
      board[selectedPiece.indexOfBoardPiece - 7] !== null
    ) {
      selectedPiece.minusFourteenthSpace = true;
    }
    if (
      board[selectedPiece.indexOfBoardPiece - 18] === null &&
      cells[selectedPiece.indexOfBoardPiece - 18].classList.contains(
        "noPieceHere"
      ) !== true &&
      board[selectedPiece.indexOfBoardPiece - 9] < 12 &&
      board[selectedPiece.indexOfBoardPiece - 9] !== null
    ) {
      selectedPiece.minusEighteenthSpace = true;
    }
  }
  checkPieceConditions();
};

const getAvailableSpaces = () => {
  if (
    board[selectedPiece.indexOfBoardPiece + 7] === null &&
    cells[selectedPiece.indexOfBoardPiece + 7].classList.contains(
      "noPieceHere"
    ) !== true
  ) {
    selectedPiece.seventhSpace = true;
  }
  if (
    board[selectedPiece.indexOfBoardPiece + 9] === null &&
    cells[selectedPiece.indexOfBoardPiece + 9].classList.contains(
      "noPieceHere"
    ) !== true
  ) {
    selectedPiece.ninthSpace = true;
  }
  if (
    board[selectedPiece.indexOfBoardPiece - 7] === null &&
    cells[selectedPiece.indexOfBoardPiece - 7].classList.contains(
      "noPieceHere"
    ) !== true
  ) {
    selectedPiece.minusSeventhSpace = true;
  }
  if (
    board[selectedPiece.indexOfBoardPiece - 9] === null &&
    cells[selectedPiece.indexOfBoardPiece - 9].classList.contains(
      "noPieceHere"
    ) !== true
  ) {
    selectedPiece.minusNinthSpace = true;
  }
  checkAvailableJumpSpaces();
};

const isPieceKing = () => {
  if (
    document.getElementById(selectedPiece.pieceId).classList.contains("king")
  ) {
    selectedPiece.isKing = true;
  } else {
    selectedPiece.isKing = false;
  }
  getAvailableSpaces();
};

function getSelectedPiece() {
  selectedPiece.pieceId = parseInt(event.target.id);
  selectedPiece.indexOfBoardPiece = findPiece(selectedPiece.pieceId);
  isPieceKing();
}

const resetSelectedPieceProperties = () => {
  selectedPiece.pieceId = -1;
  selectedPiece.isKing = false;
  selectedPiece.seventhSpace = false;
  selectedPiece.ninthSpace = false;
  selectedPiece.fourteenthSpace = false;
  selectedPiece.eighteenthSpace = false;
  selectedPiece.minusSeventhSpace = false;
  selectedPiece.minusNinthSpace = false;
  selectedPiece.minusFourteenthSpace = false;
  selectedPiece.minusEighteenthSpace = false;
};

const resetBorders = () => {
  for (let i = 0; i < playerPieces.length; i++) {
    playerPieces[i].style.border = "1px solid white";
  }
  resetSelectedPieceProperties();
  getSelectedPiece();
};

const getPlayerPieces = () => {
  if (turn) {
    playerPieces = redsPieces;
  } else {
    playerPieces = blacksPieces;
  }
  removeCellOnClick();
  resetBorders();
};

const givePiecesEventListeners = () => {
  if (turn) {
    for (let i = 0; i < redsPieces.length; i++) {
      redsPieces[i].addEventListener("click", getPlayerPieces);
    }
  } else {
    for (let i = 0; i < blacksPieces.length; i++) {
      blacksPieces[i].addEventListener("click", getPlayerPieces);
    }
  }
};

const initCheckersGame = () => {
  board = [
    null,
    0,
    null,
    1,
    null,
    2,
    null,
    3,
    4,
    null,
    5,
    null,
    6,
    null,
    7,
    null,
    null,
    8,
    null,
    9,
    null,
    10,
    null,
    11,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    12,
    null,
    13,
    null,
    14,
    null,
    15,
    null,
    null,
    16,
    null,
    17,
    null,
    18,
    null,
    19,
    20,
    null,
    21,
    null,
    22,
    null,
    23,
    null,
  ];
  cells = Array.from(document.querySelectorAll("td"));
  redsPieces = Array.from(document.querySelectorAll(".red-piece"));
  blacksPieces = Array.from(document.querySelectorAll(".black-piece"));
  redTurnText = document.querySelector(".red-turn-text");
  blackTurnText = document.querySelector(".black-turn-text");
  turn = false;
  redScore = 12;
  blackScore = 12;
  selectedPiece = {
    pieceId: -1,
    indexOfBoardPiece: -1,
    isKing: false,
    seventhSpace: false,
    ninthSpace: false,
    fourteenthSpace: false,
    eighteenthSpace: false,
    minusSeventhSpace: false,
    minusNinthSpace: false,
    minusFourteenthSpace: false,
    minusEighteenthSpace: false,
  };
  givePiecesEventListeners();
};

export {
  board,
  cells,
  redsPieces,
  blacksPieces,
  redTurnText,
  blackTurnText,
  turn,
  redScore,
  blackScore,
  playerPieces,
  selectedPiece,
  initCheckersGame,
  getPlayerPieces,
};
